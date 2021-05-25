import React from 'react';
import PropTypes from 'prop-types';

class TestComponent extends React.Component {

    static propTypes = {
        name : PropTypes.string,
    }

    state = {
        border: '1px solid',
        padding : '5px',
        color : 'blue',
        borderRadius : '0.5em',
        marginBottom: '1em',
    }

    sayHello  = () => {
        this.setState((prevState) => {
            if (prevState.color === 'blue'){
                return ({
                    color : 'red'
                })
            }
            return ({
                color : 'blue'
            })
        });
    }

    render(){

        // Use de-structure to make the
        // code clearer
        const {name, children} = this.props

        return(
            <div style={this.state}>
                <div> This is {name} </div>
                <div> My color is {this.state.color}</div>
                <button onClick={this.sayHello}>Change color</button>
                <div>
                    {children}
                </div>
            </div>
            
        )
    }
}

export default TestComponent;