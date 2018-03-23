import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class HideCheck extends Component{
  constructor(props) {
    super(props);
    this.onHideChange = this.onHideChange.bind(this);
  }
  onHideChange(e) {
    this.props.handleHide(e.target.checked);
    // console.log("e.target.checked", e.target.checked);
  }



  render() {
    return (
      <label>
        <input type="checkbox" onChange={this.onHideChange}/> Hide those who havent responded
      </label>
    );
  }
}

export default HideCheck;
