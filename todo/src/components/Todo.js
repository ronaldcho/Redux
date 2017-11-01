import React, { Component } from "react";
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

class Text extends Component {
 toggleComplete(event) {
    this.props.toggleComplete(this.props.index);
 }

  render(){
    return(
      <div className="checkbox"><button>
        <li>
            <input type="checkbox" onChange={this.toggleComplete.bind(this)} />
            {this.props.text.value}  
        </li></button>
      </div>
    );
  }
}

export default connect(null, {toggleComplete})(Text);