
//
import React from 'react'

function ExampleFunctional(props) {
    //If i want to use state I have to create each state variable by caling
    //  a react function called usseState
    let name; // variable holds the name
    let setName; // function used to update variable but it will trigger
                // trigger react so it can rerender

    [name, setName] = React.useState("Scott");

    function handleClick() {
        setName("Roger");
    }


    return ( <div>
        <h1>Hello {name} from ExampleFunctional</h1>
        <button onClick={this.handleClick.bind(this)}>Change name</button>
        </div> );
}

export default ExampleFunctional