import React, { Component } from 'react';

class EntryContent extends Component{
  render(){
    if (this.props.isEditing){
      return(
        <div>
          <span>{this.props.index}. </span>
          <input
            type="text"
            value={this.props.content}
            onChange={this.props.handleConentEdits}
          />
        </div>
      );
    }
    return (
      <li className="entry-content">
        {this.props.index}. {this.props.content}
      </li>
    )
  }
}


export default EntryContent;
