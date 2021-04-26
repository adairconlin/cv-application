import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props){
        super(props); 

        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
          active: false,
        };
    }

    toggleClass(e) {
        const currentState = this.state.active;
        this.setState({active: !currentState});
        const divClass = e.target.parentNode.className;
        if(divClass != "active") {
            console.log("not active")
        }
    };

    render(){
        const { text } = this.props;
        const { active } = this.state;
        return(
            <div className={active ? 'active' : null}
            onClick={this.toggleClass}>
                <p>{text}</p>
            </div>
        )
    }
}

export default MyComponent;