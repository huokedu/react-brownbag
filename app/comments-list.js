import React from 'react';
import Comment from './comment';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const commentNodes = this.props.data.map(comment => {
      return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
      );
    })
    commentNodes.reverse();
    return (
      <div className="comments__list">
        {commentNodes}
      </div>
    );
  }
}
