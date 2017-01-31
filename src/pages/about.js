import React, { Component } from 'react'
import {Icon} from 'react-fa'

export default class About extends Component {


  navigate() {
    console.log(this.props);
  }

  componentDidMount() {
    document.title = "About :: React Magics";
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
          <h2 className="page-title">About</h2>
          <button onClick={this.props.fetchPosts}>
            { this.props.posts.fetching ? <Icon pulse name="spinner" size="lg"/> : <Icon name="refresh" size="lg"/> }
          </button>
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
