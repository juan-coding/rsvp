import React from 'react';
// import PropTypes from 'prop-types';

const HideCheck = (props) => (
  <label>
    <input type="checkbox" onChange={props.handleHide}/> Hide those who havent responded
  </label>
);

export default HideCheck;
