import React from 'react';

class NonControlledForm extends React.Component {

    handleSubmit = (event) => {
        // avoid default refresh on submit
        event.preventDefault();

        // Get values from form elements
        // event.target point to the input
        // elements, values have to be
        // retrieved with dot notation
        const name = event.target[0].value;
        const email = event.target[1].value;

        // send data to parent
        this.props.onEnteredData({name, email})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                    type='text'
                    placeholder='year'
                    />
                </div>
                <div>
                    <input 
                    type='text'
                    placeholder='month'
                    />
                </div>
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default NonControlledForm;