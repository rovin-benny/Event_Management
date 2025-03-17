const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center text-center p-6">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">Eventify</span>
      </h1>

      {/* Subheading */}
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Your ultimate platform to plan, manage, and execute events seamlessly. From conferences to festivals, we’ve got you covered!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Explore Events
        </button>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300">
          Create Event
        </button>
      </div>

      {/* Featured Events Section */}
      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/300"
              alt="Tech Conference"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech Conference</h3>
            <p className="text-gray-600 mb-4">Join the biggest tech event of the year!</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/300"
              alt="Music Festival"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Music Festival</h3>
            <p className="text-gray-600 mb-4">Experience the best of live music!</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/300"
              alt="Workshop"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Workshop</h3>
            <p className="text-gray-600 mb-4">Learn new skills from industry experts!</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;