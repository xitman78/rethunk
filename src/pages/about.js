import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { fetchPosts } from '../actions/actionCreator'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

class About extends Component {

  componentDidMount() {
    document.title = "About :: React Magics";
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

    console.log('Render About');

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

    return (
      <div>
          <h2 className="page-title">About</h2>
          <div style={style.container}>
             <RefreshIndicator
                percentage={100}
                size={40}
                left={0}
                top={0}
                loadingColor="#777777"
                onTouchTap={this.refresh.bind(this)}
                status={ this.props.posts.fetching ? 'loading' : 'ready' }
                style={style.refresh}
              />
          </div>
          <div className="page-container">
            <List>
              {this.props.posts.posts.map(post => <div key={post.id}><ListItem
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

export default connect(
  state => ({ posts: state.posts}),
  { fetchPosts }
)(About);
