import React from 'react';

export default class extends React.Component {
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
