import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../actions/actionCreator'
import {Icon} from 'react-fa'
import RefreshIndicator from 'material-ui/RefreshIndicator'

class About extends Component {


  navigate() {
    console.log(this.props);
  }

  componentDidMount() {
    document.title = "About :: React Magics";
    this.props.fetchPosts();
  }

  render() {

    const style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        'background-color': 'white'
      },
    };

    return (
      <div>
          <h2 className="page-title">About</h2>
          <div style={style.container}>
             <RefreshIndicator
                percentage={100}
                size={40}
                left={0}
                top={0}
                loadingColor="#BB0000"
                onClick={this.props.fetchPosts}
                status={ this.props.posts.fetching ? 'loading' : 'ready' }
                style={style.refresh}
              />
            </div>
          <hr />
          <div className="page-container">
            <ul>
              {this.props.posts.posts.map(post => <div key={post.id}><h5>{post.title}</h5><p>{post.body}</p></div>)}
            </ul>
          </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
