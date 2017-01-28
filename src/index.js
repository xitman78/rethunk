import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './App';
import Home from './pages/home'
import Works from './pages/works'
import About from './pages/about'
import './index.sass';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="works" component={Works}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
