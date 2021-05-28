import React from 'react';

const validInput = (text, regExp) => {
    return !regExp.test(text);
}

class ControlledForm extends React.Component {
    
    // Use state to process
    // input data
    state = {
        inputText : '',
        validInput : false
    }

    handleChange = (event) => {
        // unpack the regexp for comparison
        const {matchRegExp, name} = this.props;
        // get input text
        const text = event.target.value.trim();
        // see if it is valid
        let isValid = validInput(text, matchRegExp)
        if(this.props.maxLength){
            isValid = isValid && text.length === parseInt(this.props.maxLength);
        }
        // Change style to enhance
        // user experience
        this.setState((prevState) => ({
            inputText : text,
            validInput : isValid
        }));
        // send data to parent
        this.props.onChange(name, text)
    }

    render(){
        const {validInput, inputText : text} = this.state;
        // highlight bad/good input
        const markColor = validInput ? 'green' : 'red';
        // set error message
        let message = '';
        if(text !== '' && !validInput){
            message = this.props.errorMessage;
        }

        return (
            <div style={{color : markColor}}>
                <input 
                type='text'
                style={{
                    padding : '1px',
                    color : markColor
                }}
                placeholder={this.props.placeholder} 
                onChange={this.handleChange}
                >
                </input>
                <p>{message}</p>
            </div>
        );
    }
}

export default ControlledForm;