import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementComment } from '../actions/actionCreator'
import DraggedField from '../components/dragged-field'
import './home.sass'
import Bounce from 'bounce.js'

let bounce = new Bounce();
bounce.rotate({
  from: 0,
  to: 90
});

class Home extends Component {

  componentDidMount() {
    document.title = "React Magics";
  }

  startBounce(ev) {

    bounce.applyTo(ev.target);

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
            <div className="bouncer" id="bouncer" onClick={this.startBounce}></div>
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
