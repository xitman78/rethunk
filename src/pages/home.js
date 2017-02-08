import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementComment } from '../actions/actionCreator'

class Home extends Component {

  componentDidMount() {
    document.title = "React Magics";
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
          <h2 className="page-title">Welcome home</h2>
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

export default connect(
  state => ({ comments: state.comments }),
  { incrementComment }
)(Home);
