import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock submit process (replace with actual API call)
    setTimeout(() => {
      alert("Quote request submitted!");
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Contact Section */}
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have a question or need assistance? Reach out to us, and we’ll get back to you as soon as possible.
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-gray-600">📧</span>
            <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800">
              info@example.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">📞</span>
            <p className="text-gray-800">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Request Quote Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Request a Quote</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your needs"
                rows="4"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
              <p className="text-gray-500 text-sm">
                Well respond within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
