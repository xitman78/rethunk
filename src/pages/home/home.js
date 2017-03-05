import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Helmet from 'react-helmet'

import { incrementComment } from '../../actions/actionCreator'
import DraggedField from '../../components/dragged-field'
import Dragged from '../../components/dragged'
import './home.sass'


class Home extends Component {

  shouldComponentUpdate(nextProps) {

    return (this.props.comments.hashCode() !== nextProps.comments.hashCode());

  }

  render() {

    console.log('Render Home');

    const comments = this.props.comments.get('comments').toJS();
    return (
      <div>
          <Helmet title="React Magics" />
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
            <DraggedField>
              <Dragged />
            </DraggedField>
          </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comments: state => state.get('comments'),
});

export default connect(
  mapStateToProps,
  { incrementComment }
)(Home);
