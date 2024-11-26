// Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-6">
      <p>&copy; {new Date().getFullYear()} Dailey Supply Inc. All rights reserved.</p>
      <nav>
        <a href="/about" className="mx-2 text-blue-400 hover:text-blue-600">About Us</a>
        <span>|</span>
        <a href="/contact" className="mx-2 text-blue-400 hover:text-blue-600">Contact</a>
        <span>|</span>
        <a href="/privacy" className="mx-2 text-blue-400 hover:text-blue-600">Privacy Policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
