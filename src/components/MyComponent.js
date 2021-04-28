import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            text: '',
            active: false,
          };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({active: !currentState});
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({text: this.state.value});
        event.preventDefault();
        this.toggleClass();
      }

    render() {
        const { text, value, } = this.state;
        const { title, placeHolder } = this.props;
        return (
            <div>
                <h4>{title}</h4>
                <form onSubmit={this.handleSubmit} className={this.state.active ? 'active' : null}>
                    <input placeholder={placeHolder} type="text" value={value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <p onClick={this.toggleClass} className={this.state.active ? null : 'active'}>{text}</p>
            </div>
        )
    }
}

export default MyComponent;