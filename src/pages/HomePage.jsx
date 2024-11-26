import HomeCarousel from '../components/HomeCarousel'

const HomePage = () => {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-semibold text-center mb-6">Welcome to Our Website</h1>

      <HomeCarousel />

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">Explore our amazing catalog of products, services, and more!</p>
      </div>
    </div>
  );
};

export default HomePage;
