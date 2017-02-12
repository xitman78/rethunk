import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './App'
import Home from './pages/home'
import Works from './pages/works'
import About from './pages/about'
import PostDetails from './pages/post'
import NotFound from './pages/404'
import './index.sass'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="works" component={Works}/>
        <Route path="post/:id" component={PostDetails}/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
