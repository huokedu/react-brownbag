import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="comment-form"
        onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Your name"
          name="author"
          value={this.state.author} 
          onChange={this.handleAuthorChange} />
        <textarea type="textarea"
          placeholder="Say something..."
          name="text"
          value={this.state.text} 
          onChange={this.handleTextChange} />
        <input type="submit" value="Add comment" />
      </form>
    );
  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value
    });
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (author && text) {
      this.props.onCommentAdd({
        author,
        text
      });
      this.setState({
        author: '',
        text: ''
      });
    }
  }
}

export default CommentForm;