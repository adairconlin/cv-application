import React, { Component } from "react";
import MyComponent from "./components/MyComponent";
import MyInput from "./components/MyInput";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showButton: false,
    };
  }

  toggleButton() {
    this.setState({ showButton: !this.state.showButton });
  };

  render() {
    const { showButton } = this.state;
    return (
      <div>
        <button onClick={() => this.toggleButton()}>click me</button>
        { showButton ? <MyComponent text="edit me" /> : <MyInput value={this.state.value} /> }
      </div>
    )
  }
}

export default App;
