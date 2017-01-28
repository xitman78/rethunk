import React, { Component } from 'react';
//import { Link} from 'react-router';

export default class About extends Component {


  navigate() {
    console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
          <h1>About</h1>
          <button onClick={this.navigate.bind(this)}>Show props</button>
          <hr />
          <div className="page-container">
            <ul>
              {this.props.posts.map(post => <div key={post.id}><h5>{post.title}</h5><p>{post.body}</p></div>)}
            </ul>
          </div>
      </div>
    );
  }
}
