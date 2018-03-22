import React from 'react';

const Invitee = (props) => (
     <li className={props.isResponse ? 'responded' : ''}>
      <span>{props.name}</span>
      <label>
        <input type="checkbox" onChange={props.handleChecked}/> Confirmed
      </label>
      <button onClick={props.handleEdit}>edit</button>
      <button onClick={props.handleRemove}>remove</button>
     </li>
   );


export default Invitee;
