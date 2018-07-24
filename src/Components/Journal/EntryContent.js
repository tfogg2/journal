import React, { Component } from 'react';

class EntryContent extends Component{
  render(){
    if (this.props.isEditing){
      return(
        <input
          type="text"
          value={this.props.content}
          onChange={this.props.handleConentEdits}
        />
      );
    }
    return (
      <div className="entry-content">
        <span>{this.props.content}</span>
      </div>
    )
  }
}


export default EntryContent;
