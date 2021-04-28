import React, { Component } from "react";
import MyComponent from "./components/MyComponent";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="generalDiv">
          <h2>General Info</h2>
          <MyComponent title="Full Name:" placeHolder="Full Name" />
          <MyComponent title="Email:" placeHolder="username@domain.com" />
          <MyComponent title="Phone Number: " placeHolder="123-456-7890" />
        </div>

        <div className="schoolDiv">
          <h2>Education Experience</h2>
          <MyComponent title="School Name:" placeHolder="Full School Name" />
          <MyComponent title="Degree:" placeHolder="Title of Degree" />
          <MyComponent title="Date of Study:" placeHolder="MM/YYYY - MM/YYYY" />
        </div>

        <div className="workDiv">
          <h2>Work Experience</h2>
          <MyComponent title="Company Name:" placeHolder="Company Name" />
          <MyComponent title="Job Position:" placeHolder="Your job position" />
          <MyComponent title="Date of Work:" placeHolder="MM/YYYY - MM/YYYY" />
        </div>
      </div>
    )
  }
}

export default App;
