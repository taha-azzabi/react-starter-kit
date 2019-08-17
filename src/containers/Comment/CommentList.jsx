import React from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/Heading';
import SingleComment from './SingleComment';

const CommentList = ({ comments }) => (
  <div>
    <Heading>Comment List</Heading>
    {/* eslint-disable-next-line react/no-array-index-key */}
    <ul>{comments.map((comment, i) => <SingleComment key={i} comment={comment} />)}</ul>
  </div>
);
const mapStateToProps = ({ comments }) => ({ comments: comments.comments });
export default connect(mapStateToProps)(CommentList);
