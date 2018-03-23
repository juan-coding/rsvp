import React from 'react';

class Invitee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isResponse: false,
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onResponseChange = this.onResponseChange.bind(this);
  }

  onKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.handleEnterKeyPress(e.target.value);
    } else {
      this.props.handleKeyPress(e.target.value);
    }
  }

  onResponseChange(e) {
    this.setState({
      isResponse: !e.target.checked,
    });
    this.props.handleChecked(!e.target.checked);
  }

  render() {
    return (
      <li className={this.props.isResponse ? 'responded' : ''}>
       {this.props.edit ? (<input onKeyPress={this.onKeyPress}/>) : <span>{this.props.name}</span>}
       <label>
         <input type="checkbox" onChange={this.onResponseChange}/> Confirmed
       </label>
       <button onClick={this.props.handleClickEdit}>edit</button>
       <button onClick={this.props.handleRemove}>remove</button>
      </li>
    )
  }

}

export default Invitee;
