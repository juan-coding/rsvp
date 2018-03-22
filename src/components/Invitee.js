import React from 'react';

const Invitee = (props) => (
     <li className="responded">
      <span>{props.name}</span>
      <label>
        <input type="checkbox" /> Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
     </li>
   );


export default Invitee;
