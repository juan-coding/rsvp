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
    this.handleChecked = this.handleChecked.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

handleInputNameChange(inputName) {
  this.setState({
    name: inputName,
  })
}

handleSubmit(){
  let newInvitee = {name: this.state.name, isResponse: false, id:id};
  this.state.invitees.push(newInvitee);
  // console.log('invitees: ',this.state.invitees);
  this.setState({
    invitees: this.state.invitees,
  })
  id++;
  // console.log('now id: ', id);// for test
}

 handleResponseChange(isResponseOnly) {
   this.setState({
     responseOnly: isResponseOnly
   });
 }

 handleHide() {
   let updateInvitees = this.state.invitees.filter(invitee => invitee.isResponse);
   this.setState({
    invitees: updateInvitees,
  })

 }

 handleChecked(index) {
   let updateInvitees = this.state.invitees;
   updateInvitees[index].isResponse = true;
   this.setState({
     invitees: updateInvitees,
   });
 }

 handleRemove(index) {
   let updateInvitees = this.state.invitees;
   updateInvitees.splice(index, 1);
   this.setState({
     invitees: updateInvitees,
   });
 }

 handleEdit(index, newname){
   console.log('edit');
    let updateInvitees = this.state.invitees;
    updateInvitees[index].name = newname;
    this.setState({
      invitees: updateInvitees,
    });
 }


  render() {
    let self = this;// store 'this' in variable 'self' to access the right 'this'

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
            <HideCheck handleHide={this.handleHide}/>
          </div>
          <Counter invitees={this.state.invitees} />
          <ul>
            <ShowInputNameChange name={this.state.name}/>
            {self.state.invitees.map(function(invitee, index) {
              return (
                <Invitee
                name={invitee.name}
                isResponse={invitee.isResponse}
                key={invitee.id}
                handleChecked={function(){self.handleChecked(index)}}
                handleRemove={function(){self.handleRemove(index)}}
                handleEdit={function(newname){self.handleEdit(index, newname)}}/>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
