import React, {Component} from 'react';

class Invitees extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      {self.state.invitees.map(function(invitee, index) {
        return (
          <Invitee
          name={invitee.name}
          isResponse={invitee.isResponse}
          key={invitee.id}
          handleChecked={function(value){this.props.handleChecked(value, index)}}
          handleRemove={function(){this.props.handleRemove(index)}}
          handleClickEdit={function(){this.props.handleClickEdit(index)}}
          handleEnterKeyPress={function(value){this.props.handleEnterKeyPress(value, index)}}
          handleKeyPress={self.handleKeyPress}
          edit={invitee.edit}/>
        )
      })}
    )
  }
}

export default Invitees;
