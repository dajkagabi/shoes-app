

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        <p className="text-gray-700 mb-8 text-center">
          Welcome to our shoe store! We are located in the heart of the city and offer a wide range of shoes for all occasions.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> info@shoestore.com</p>
          <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Shoe Street, Suite 456, Cityville</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Opening Hours</h2>
          <p className="text-gray-700 mb-2"><strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM</p>
          <p className="text-gray-700 mb-2"><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
          <p className="text-gray-700 mb-2"><strong>Sunday:</strong> Closed</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <form className="bg-gray-100 p-4 rounded-lg">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;