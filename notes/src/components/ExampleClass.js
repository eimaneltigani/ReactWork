//This is an exampple of React component created with a classs.
import React, {Component} from 'react';

//if you are going to store a piece of data that you are going to render
// There are rulels for how you go about it react
// Anything that is isplayed via render-- hase to come from one of two places
//1. this.props - holds properties the field waas initialized with but
// can actually change dynamically in react, generally used to store anything that's goinng to be rendered
// that is coming from the outside world (i.e. from another component)
//2. this.state - used to hold internal malleable, changeablle managed by the component itself
// if u update the state correctly 
class ExampleClass extends Component {
    constructor() { 
        super(); // Calls compoonent's constructor
        this.state = {
            myVar : "hello"
        }
    }

    handleClick() {
        this.setState({name: "Roger"});
    }
    render() {
        return (<div>
                    <h1>Hello {this.state.myVar} from ExampleClass</h1>
                    <button onClick={this.handleClick.bind(this)}>Change name</button>
        </div>);

        //In Vanilla HTML we would say <button onclick="handleClick();">Change Name</button>
        // In JSX, you need to reference the function

        
    }
}

export default ExampleClass