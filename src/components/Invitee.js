import React from 'react';

const Invitee = (props) => (
     <li className="responded">
      <span>{props.name}</span>
      <label>
        <input type="checkbox" onChange={props.handleChecked}/> Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
     </li>
   );


export default Invitee;
