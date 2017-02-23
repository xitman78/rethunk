import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementComment } from '../actions/actionCreator'
import DraggedField from '../components/dragged-field'
import './home.sass'

class Home extends Component {

  componentDidMount() {
    document.title = "React Magics";
  }

  render() {

    console.log('Render Home');

    const { comments } = this.props;
    return (
      <div>
          <h2 className="page-title">Welcome home</h2>
          <ul style={{listStyleType: 'none'}}>
          {
            comments.map(cm => { return (
              <li key={cm.id} className="counter-item">{'Comment ' + cm.id + ' '}
                <button onClick={this.props.incrementComment.bind(null, cm.id)}>+</button>
                {' - ' + cm.count}
              </li>);
            })
          }
          </ul>
          <div className="dragged-field-container">
            <DraggedField />
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({ comments: state.comments }),
  { incrementComment }
)(Home);
