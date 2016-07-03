import React from 'react';
import Comment from './comment';

class CommentsList extends React.Component {
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

CommentsList.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default CommentsList;
