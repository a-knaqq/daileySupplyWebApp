import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AccountGrid from './components/AccountGrid';
import InspectionPage from './pages/InspectionPage';
import SupplyPage from './pages/SupplyPage';
import TrainingsPage from './pages/TrainingsPage';

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false); // Set to false to show the navbar by default
  const [selectedItem, setSelectedItem] = useState('Home'); // Default to "Home"

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavItemClick = (itemName) => {
    setSelectedItem(itemName); // Update the selected item
    // Collapse navbar only on small screens (mobile)
    if (window.innerWidth <= 350) {
      setIsNavCollapsed(true); // Collapse the navbar
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-gray-800 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-lg">
              MyApp <span className="text-gray-400 text-sm">({selectedItem})</span>
            </h1>
            {/* Always visible toggle button */}
            <button
              className="text-white focus:outline-none"
              onClick={handleNavToggle}
            >
              ☰
            </button>
          </div>
          <ul
            className={`mt-4 ${isNavCollapsed ? 'hidden' : 'flex'} flex-col sm:flex-row sm:space-x-4`}
          >
            <li>
              <Link
                to="/"
                className={`block px-3 py-2 rounded ${
                  selectedItem === 'Home' ? 'bg-gray-700 text-white' : 'text-white hover:text-gray-300'
                }`}
                onClick={() => handleNavItemClick('Home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`block px-3 py-2 rounded ${
                  selectedItem === 'Products' ? 'bg-gray-700 text-white' : 'text-white hover:text-gray-300'
                }`}
                onClick={() => handleNavItemClick('Products')}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded ${
                  selectedItem === 'Contact' ? 'bg-gray-700 text-white' : 'text-white hover:text-gray-300'
                }`}
                onClick={() => handleNavItemClick('Contact')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/internal"
                className={`block px-3 py-2 rounded ${
                  selectedItem === 'Login' ? 'bg-gray-700 text-white' : 'text-white hover:text-gray-300'
                }`}
                onClick={() => handleNavItemClick('Login')}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content area */}
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/internal" element={<AccountGrid />} />
            <Route path="/inspections/:accountId" element={<InspectionPage />} />
            <Route path="/supply/:accountId" element={<SupplyPage />} />
            <Route path="/trainings/:accountId" element={<TrainingsPage />} />
          </Routes>
        </div>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
