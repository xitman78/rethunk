import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { createStructuredSelector } from 'reselect';
import RefreshIndicator from 'material-ui/RefreshIndicator'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { fetchPosts } from '../../actions/actionCreator'


class Posts extends Component {

  componentDidMount() {
    document.title = "Posts :: React Magics";
    this.props.fetchPosts();
  }

  refresh() {
    // console.log('this.props', this.props);
    this.props.fetchPosts();
  }

  showPost(postId) {
    browserHistory.push('/post/' + postId);
  }

  render() {

    // console.log('Render About', this.props.posts);

    const style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        'backgroundColor': 'white'
      },
    };

   let postsList = this.props.posts.get('posts').toJS();

   let error = this.props.posts.get('error');

    return (
      <div>
          <h2 className="page-title">Blog</h2>
          { error ? <div><h3>Fetch error</h3>{JSON.stringify(error)}</div> : null }
          <p style={{color: 'white'}}>These posts are fetched from <a href="https://jsonplaceholder.typicode.com" target="_blank">https://jsonplaceholder.typicode.com</a></p>
          <div style={style.container}>
             <RefreshIndicator
                percentage={100}
                size={40}
                left={0}
                top={0}
                loadingColor="#777777"
                onTouchTap={this.refresh.bind(this)}
                status={ this.props.posts.get('fetching') ? 'loading' : 'ready' }
                style={style.refresh}
              />
          </div>
          <div className="page-container">
            <List>
              {postsList.map(post => <div key={post.id}><ListItem
                  primaryText={post.title}
                  secondaryText={post.body}
                  onTouchTap={this.showPost.bind(this, post.id)}
                  secondaryTextLines={2}/><Divider inset={true} /></div>)}
            </List>
          </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: state => state.get('posts'),
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
