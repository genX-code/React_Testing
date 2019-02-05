import React from 'react';

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    }
  }

  inputHandler = (e) => {
    const comment = e.target.value;
    this.setState(() => ({comment}));
  }

  formHandler = (event) => {
    event.preventDefault();
    this.setState(() => ({comment:""}));
  }

  render() {
    return (
      <form onSubmit={this.formHandler} className="comment">
        <h3>Im the comment box</h3>
        <textarea name="comment" id="comment" cols="30" rows="10" value={this.state.comment} onChange={this.inputHandler}></textarea>
        <button>Submit</button>
      </form>
    )
  }
}

export default Comment;