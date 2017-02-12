import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link} from 'react-router';
import { fetchPosts } from '../actions/actionCreator'

class PostDetails extends Component {

  componentDidMount() {
    console.log(this.props.params.id);

    let postId = this.props.params.id;
    let post = this.props.posts.posts.find(p => p.id == postId);

    // this.post = post;

    if(!post) this.props.fetchPosts();

  }

  // componentWillReceiveProps(nextProps) {
  //
  //   let postId = nextProps.params.id;
  //   let post = nextProps.posts.posts.find(p => p.id == postId);
  //
  //   this.post = post;
  //
  // }

  render() {

    let postId = this.props.params.id;
    let post = this.props.posts.posts.find(p => p.id == postId);

    return (
      <div className="child-container">
        <h2 className="page-title">Post Details</h2>
          <p>Here is post details</p>
          <hr />
          { post ? JSON.stringify(post) : 'post is not loaded' }
      </div>
    )
  };

}

export default connect(
  state => ({ posts: state.posts }),
  { fetchPosts }
)(PostDetails);
