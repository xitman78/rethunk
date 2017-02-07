import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreators from './actions/actionCreator'
// import logo from './logo.svg';
import './App.sass';
import './style.sass';
import {Icon} from 'react-fa'
import MainHeader from './components/header'
import ModalAlert from './components/modals/alert'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#333333',
    primary1Color: '#e45304',
    primary2Color: '#e45304',
    primary3Color: '#e45304',
    accent1Color: '#c10000',
    accent2Color: '#c10000',
    accent3Color: '#c10000',
    canvasColor: '#EEEEEE',
  },
  appBar: {
    height: 50,
  },
});

function mapStateToProps(state) {
  return {
    works: state.works,
    modals: state.modals,
    comments: state.comments,
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

class IApp extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <ModalAlert />
            <MainHeader />
            <div className="App-header">
              <Link className="menu-link" to="/"><Icon name="home" className="menu-icon"/>Home</Link>
              <Link className="menu-link" to="/works">Works</Link>
              <Link className="menu-link" to="/about">About</Link>
            </div>
            <div>
              {this.props.children}
              { /*React.cloneElement(this.props.children, this.props) */ }
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();

const App = connect(mapStateToProps, mapDispatchToProps)(IApp);

export default App;
