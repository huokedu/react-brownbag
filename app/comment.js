import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="comment">
          <div className="comment__author">
            {this.props.author}
          </div>
          {this.props.children}
        </div>
      );
    }
}

export default Comment;
