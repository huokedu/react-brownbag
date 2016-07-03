import React from 'react';
import CommentForm from './comment-form';
import CommentsList from './comments-list';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
    this.handleCommentAdd = this.handleCommentAdd.bind(this);
  }

  render() {
    return (
      <div className="comments">
        <h1 className="comments__title">Comments</h1>
        <CommentForm onCommentAdd={this.handleCommentAdd} />
        <CommentsList data={this.state.data} />
      </div>
    );
  }

  handleCommentAdd(comment) {
    comment.id = Date.now();
    this.setState({
      data: this.state.data.concat(comment)
    });
  }
}

Comments.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default Comments;
