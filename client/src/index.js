import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BaseLayout } from './components/BaseLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import WomenFragrance from './components/WomenFragrance'
import { MenFragrance } from './components/MenFragrance'
import { Products } from './components/Products'
import CartPage from './components/CartPage'
import cartReducer from './store/reducer'
import reducer from './store/reducer'

const rootReducer = combineReducers({
  cart: cartReducer
})

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Products}/>
        <Route path="/women_fragrances" component={WomenFragrance}/>
        <Route path="/men_fragrances" component={MenFragrance} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  </Provider >
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
