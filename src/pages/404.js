import React, { Component } from 'react';
import { Link} from 'react-router';

export default class NotFound extends Component {


  render() {
    return (
      <div>
        <h2>404: Not found</h2>
          <p>Sorry! Page that you are looking for cannot be found.</p>
        <Link to="/">Homepage</Link>
      </div>
    )
  };

}
