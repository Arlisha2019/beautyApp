import React, { Component } from 'react';
import logo from './logo.svg';
import MyStoreCheckout from './components/MyStoreCheckout';
import './App.css';
import { connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <MyStoreCheckout
            name={'Discount Perfumes'}
            description={'Enter Your Credit Card Information Below'}
            amount={1}
          />
        </p>
      </div>
    );
    console.log(this.props.listPrice);
  }
}


const mapStateToProps = (state) => {
  return {
    totalPrice: state.totalPrice
  }
}

export default connect(mapStateToProps, null)(App)
