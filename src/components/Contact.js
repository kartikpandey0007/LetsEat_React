import React from "react";

const Contact = () => {
  return (
    <div className="about-container bg-gradient-to-r from-pink-100 to-white min-h-screen flex items-center justify-center px-4">
      {/* Outer wrapper to align vertically */}
      <div className="flex flex-col items-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h1>

        <form className="bg-white p-6 rounded-lg shadow-md w-full space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
