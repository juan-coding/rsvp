import React from 'react';

const Counter = (props) => {
  let count = 0;
  for(let i=0; i<props.invitees.length; i++) {
    if(props.invitees[i].isResponse) {
      count++;
    }
  }
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{count}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{props.invitees.length-count}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{props.invitees.length}</td>
        </tr>
      </tbody>
    </table>
);
}

export default Counter;
