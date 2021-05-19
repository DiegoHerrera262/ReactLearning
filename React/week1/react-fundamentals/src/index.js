import React from 'react';
import ReactDOM from 'react-dom';

class SomeClassComponent extends React.Component {
  // No construct is used
  state = {
    numberToCart : 0
  }
  // Definition of desired
  // methods
  addToCart = () => {
    this.setState({
      numberToCart : this.state.numberToCart + 1
    });
  }
  removeFromCart = () => {
    this.setState({
      numberToCart : this.state.numberToCart - 1
    });
  }
  render(){
    return(
      <div>
        <div>
          <h1>{this.props.name}</h1>
        </div>
        <div>
          In cart: {this.state.numberToCart}
        </div>
        <div>
          <button onClick={this.addToCart}>+</button>
          <button onClick={this.removeFromCart}>-</button>
        </div>
      </div>
    );
  }
}

function App(){
  return(
    <div>
      <SomeClassComponent name="Kiwi"/>
      <SomeClassComponent name="Banana" />
    </div>
  );
}

// Load App to DOM
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

