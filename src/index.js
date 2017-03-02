import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './App'
import Home from './pages/home/home'
import Works from './pages/works/works'
import Bouncer from './pages/bouncer/bouncer'
import Posts from './pages/posts/posts'
import PostDetails from './pages/posts/details/post'
import NotFound from './pages/404/404'
import './index.sass'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="posts" component={Posts}/>
        <Route path="works" component={Works}/>
        <Route path="bounce" component={Bouncer}/>
        <Route path="post/:id" component={PostDetails}/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
