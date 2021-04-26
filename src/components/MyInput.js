import React, { Component } from "react";

class MyInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        }
    }

    updateValue() {
        this.setState({value: this.state.value});
    }

    render() {
        const { value } = this.state;
        const { updateValue } = this.props;
        return (
            <div>
                <input type="text" placeholder="edit me" value={value} onChange={updateValue} />
            </div>
        )
    }
}

export default MyInput;