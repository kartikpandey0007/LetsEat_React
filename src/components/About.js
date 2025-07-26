import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

  render(){
    return (
    <div className="about-container">
      <UserClass name={"Kartik"}/>
    </div>
  )
  }
};
export default About;
