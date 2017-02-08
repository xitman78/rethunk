import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {Icon} from 'react-fa'
import MainHeader from './components/header'
import ModalAlert from './components/modals/alert'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper'
import './App.sass'
import './style.sass'


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

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class App extends Component {

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
            </div>
            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={1} style={{backgroundColor: '#CCCCCC'}}>
                <BottomNavigationItem
                  label="Recents"
                  icon={recentsIcon}
                />
                <BottomNavigationItem
                  label="Favorites"
                  icon={favoritesIcon}
                />
                <BottomNavigationItem
                  label="Nearby"
                  icon={nearbyIcon}
                />
            </BottomNavigation>
          </Paper>
          </div>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();

export default connect(state => ({}), {})(App);
