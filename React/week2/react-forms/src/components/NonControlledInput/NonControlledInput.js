import React from 'react';

class NonControlledInput extends React.Component {
    // Create references for
    // getting input from real DOM
    name = React.createRef();
    email = React.createRef();

    handleSubmit = () => {
        // Get values from input using refs
        const name = this.name.current.value;
        const email = this.email.current.value;

        // send data to parent
        this.props.onEnteredData({name, email})
    }

    render(){
        return (
            <div>
                <div>
                    <input 
                    type='text' 
                    ref={this.name} 
                    placeholder='name'
                />
                </div>
                <div>
                    <input 
                    type='text' 
                    ref={this.email} 
                    placeholder='email'
                    />
                </div>
                <div>
                    <button onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default NonControlledInput;