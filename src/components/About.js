import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about-container bg-gradient-to-r from-pink-100 to-white min-h-screen flex items-center justify-center">
        <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full text-center">
          <h1 className="text-3xl font-bold mb-4 text-pink-600">About Us</h1>
          <p className="text-gray-600 mb-6">
            Welcome to the About Page! Here's a brief intro:
          </p>
          <UserClass name={"Kartik"} />
        </div>
      </div>
    );
  }
}

export default About;
