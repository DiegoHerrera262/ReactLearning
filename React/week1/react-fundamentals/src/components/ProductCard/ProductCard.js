import React from 'react';
import cardStyle from './ProductCard.module.css';

class ProductCard extends React.Component {
  // No construct is used
  state = {
    shopDetails : {
      numberToCart : 0,
      isFavorite : false
    }
  }
  // Definition of desired
  // methods
  markFavorite = (event) => {
    this.setState((prevState) => {
      if (event.target.value === 'Yes'){
        return {
          shopDetails : {
            ...prevState.shopDetails,
            isFavorite : true
          }
        }
      }
      return {
        shopDetails : {
          ...prevState.shopDetails,
          isFavorite : false
        }
      }
    });
  }
  addToCart = () => {
    this.setState((prevState) => ({
      shopDetails : {
        ...prevState.shopDetails,
        numberToCart : prevState.shopDetails.numberToCart + 1
      }
    }));
  }
  removeFromCart = () => {
    this.setState((prevState) => ({
      shopDetails : {
        ...prevState.shopDetails,
      numberToCart : prevState.shopDetails.numberToCart > 0 ? prevState.shopDetails.numberToCart - 1 : 0
      }
    }));
  }
  resetUnits = () =>{
    this.setState((prevState) => ({
      shopDetails : {
        ...prevState.shopDetails,
        numberToCart : 0
      }
    }));
  }
  render(){
    const activeClass = this.state.shopDetails.numberToCart > 0 ? cardStyle['card-active'] : '';
    const compClass = cardStyle.card + ' ' + activeClass;
    const HeaderStyle = {
      color : this.state.shopDetails.isFavorite ? 'red' : ''
    };
    return(
      <div className={compClass}>
        <div>
          <h1 style={HeaderStyle}>{this.props.name}</h1>
        </div>
        <div>
          <p>Price per unit: {this.props.price}</p>
          <p>In cart: {this.state.shopDetails.numberToCart}</p>
          <p><b>Total cost:</b> $ {this.props.price * this.state.shopDetails.numberToCart}</p>
        </div>
        <div>
          <button onClick={this.addToCart}>+</button>
          {this.state.shopDetails.numberToCart}
          <button onClick={this.removeFromCart}>-</button>
        </div>
        <div>
          <button onClick={this.resetUnits}>Reset</button>
        </div>
        <div>
          <div>
            Do you want to add to favorites?
          </div>
          <input onChange={this.markFavorite}/>
        </div>
      </div>
    );
  }
}

// Export class comp
// for usage in App
export default ProductCard;