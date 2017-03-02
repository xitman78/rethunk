import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link} from 'react-router';
import { fetchPosts } from '../../../actions/actionCreator'
import PostInfo from '../../../components/post-info'

class PostDetails extends Component {

  componentDidMount() {
    console.log(this.props.params.id);

    let postId = this.props.params.id;
    let post = this.props.posts.posts.find(p => p.id == postId);

    if(!post) this.props.fetchPosts();

  }


  render() {

    let postId = this.props.params.id;
    let post = this.props.posts.posts.find(p => p.id == postId);

    return (
      <div className="child-container">
        <h2 className="page-title">Post Details</h2>
          <PostInfo {...post} />
      </div>
    )
  };

}

export default connect(
  state => ({ posts: state.posts }),
  { fetchPosts }
)(PostDetails);
