import React, { Component } from 'react'

export default class Home extends Component {

  render() {
    const { comments } = this.props;
    return (
      <div>
          <h1>Home</h1>
          <hr />
          <ul style={{listStyleType: 'none'}}>
          {
            comments.map(cm => { return (
              <li key={cm.id}>{'Comment ' + cm.id + ' '}
                <button onClick={this.props.incrementComment.bind(null, cm.id)}>+</button>
                {' - ' + cm.count}
              </li>);
            })
          }
          </ul>
      </div>
    );
  }
}
