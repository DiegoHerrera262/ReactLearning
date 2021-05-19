import React from 'react';
import ReactDOM from 'react-dom';

class SomeClassComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      numberToCart : 0
    };
  }
  render(){
    return(
      <div>
        <div>
          <h1>Product: {this.props.name}</h1>
        </div>
        <div>
          Click to add to cart!
        </div>
        <button
          onClick={
            () => {
              this.setState({
                numberToCart : this.state.numberToCart + 1
              });
            }
          }
        >
          {this.state.numberToCart}
        </button>
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

