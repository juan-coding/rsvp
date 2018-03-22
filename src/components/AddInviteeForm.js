import React from 'react';
// import PropTypes from 'prop-types';

class AddInviteeForm extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   name: "",
    // };
    this.onInputNameChange=this.onInputNameChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  onInputNameChange(e) {
    // this.props.handleInputNameChange(e.target.value),
    this.props.handleInputNameChange(e.target.value);
  }

  onSubmitChange(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <form onSubmit={this.onSubmitChange}>
          <input type="text"
          value={this.props.name}
          placeholder="Invite Someone"
          onChange={this.onInputNameChange}/>
          <button type="submit" name="submit" value="submit">Submit</button>
      </form>
    );
  }
}


export default AddInviteeForm;
