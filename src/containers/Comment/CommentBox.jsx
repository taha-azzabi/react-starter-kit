import React from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../../actions/comments';
import Heading from '../../components/Heading';

class CommentBox extends React.Component {
  state = {
    comment: '',
  };

  handleChange = event => this.setState({ comment: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.saveComment(comment);
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    return (
      <div>
        <Heading>Comment Box</Heading>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={comment} />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment },
)(CommentBox);
