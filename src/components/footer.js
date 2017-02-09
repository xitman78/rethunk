import React, { Component } from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import Paper from 'material-ui/Paper'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class Footer extends Component {

  render() {

    console.log('Render Footer');

    return (
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
    );
  }
}
