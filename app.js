import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './app/comments';
import commentsData from './app/comments-data';

const appElem = document.getElementById('app');
ReactDOM.render(<Comments data={commentsData} />, appElem);
