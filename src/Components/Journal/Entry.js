import React, { Component } from 'react';
import EntryContent from './EntryContent.js';
class Entry extends Component{
  render(){
    return(
      <div className="entry">
        <EntryContent
          contnet={this.props.content}
          handleToggleEditing={this.props.handleToggleEditing}
          isEditing={this.props.isEditing}
          handleConentEdits={e => this.props.setContent(e.target.value)}
        />
        <button onClick={this.props.handleToggleEditing}>
          {this.props.isEditing ? "save" : "edit"}
        </button>
        <button onClick={this.props.handleRemoveEntry}>remove</button>
      </div>
    )
  }
}


export default Entry;
