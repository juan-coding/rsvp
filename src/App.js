import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HideCheck from './components/HideCheck';
import Counter from './components/Counter';
import Invitee from './components/Invitee';
import ShowInputNameChange from './components/ShowInputNameChange';

let invitees = [];// invitee object container
let id = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      responseOnly: false,
      invitees: invitees,
    };
    // this.onAddInvitee = this.onAddInvitee.bind(this);
    this.handleInputNameChange = this.handleInputNameChange.bind(this);
    this.handleResponseChange = this.handleResponseChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleInputNameChange(inputName) {
  this.setState({
    name: inputName,
  })
}

handleSubmit(){
  let newInvitee = {name: this.state.name,isResponse: false, id:id};
  this.state.invitees.push(newInvitee);
  console.log('invitees: ',this.state.invitees);
  this.setState({
    invitees: this.state.invitees,
  })
  id++;
  console.log('now id: ', id);
}

 handleResponseChange(isResponseOnly) {
   this.setState({
     responseOnly: isResponseOnly
   });
 }

  render() {
    return (
      <div className="App">
        <Header
         title="RSVP"
         handleResponseChange={this.handleResponseChange}
         handleInputNameChange={this.handleInputNameChange}
         name={this.state.name}
         handleSubmit={this.handleSubmit}/>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <HideCheck />
          </div>
          <Counter />
          {}
          <ul>
            <ShowInputNameChange name={this.state.name}/>
            {this.state.invitees.map(function(invitee, index) {
              return (
                <Invitee
                name={invitee.name}
                isResponse={invitee.isResponse}
                key={invitee.id}/>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
