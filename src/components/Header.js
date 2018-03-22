import React from 'react';
// import PropTypes from 'prop-types';
import AddInviteeForm from './AddInviteeForm';

const Header = (props) => (
  <header>
    <h1>{props.title}</h1>
    <AddInviteeForm
     handleResponseChange={props.handleResponseChange}
     handleInputNameChange={props.handleInputNameChange}
     name={props.name}
     handleSubmit={props.handleSubmit}/>
  </header>
);

export default Header;
