import React from 'react';
import cardStyle from './ProductCard.module.css';

class ProductCard extends React.Component {
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
  resetUnits = () =>{
    this.setState({
      numberToCart : 0
    })
  }
  render(){
    const activeClass = this.state.numberToCart > 0 ? cardStyle['card-active'] : '';
    const compClass = cardStyle.card + ' ' + activeClass; 
    return(
      <div className={compClass}>
        <div>
          <h1>{this.props.name}</h1>
        </div>
        <div>
          <p>Price per unit: {this.props.price}</p>
          <p>In cart: {this.state.numberToCart}</p>
          <p><b>Total cost:</b> $ {this.props.price * this.state.numberToCart}</p>
        </div>
        <div>
          <button onClick={this.addToCart}>+</button>
          {this.state.numberToCart}
          <button onClick={this.removeFromCart}>-</button>
        </div>
        <div>
          <button onClick={this.resetUnits}>Reset</button>
        </div>
      </div>
    );
  }
}

// Export class comp
// for usage in App
export default ProductCard;