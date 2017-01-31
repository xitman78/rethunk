import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreator'
// import logo from './logo.svg';
import './App.sass';
import './style.sass';
import {Icon} from 'react-fa'
import MainHeader from './components/header'

function mapStateToProps(state) {
  return {
    works: state.works,
    comments: state.comments,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

class IApp extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <div className="App-header">
          <Link className="menu-link" to="/"><Icon name="home" className="menu-icon"/>Home</Link>
          <Link className="menu-link" to="/works">Works</Link>
          <Link className="menu-link" to="/about">About</Link>
        </div>
        <div>
          { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(IApp);

export default App;
