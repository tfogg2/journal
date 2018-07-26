import React, { Component } from 'react';
import EntryContent from './EntryContent.js';
class Entry extends Component{
  handleKeyDown = (event, id) => {
    var KeyId = event.keyCode;
    if (KeyId === 8 && this.props.content === '') {
      {this.props.handleRemoveEntry(id)}
    }
    if (KeyId === 46 && this.props.content === '') {
        {this.props.handleRemoveEntry(id)}
    }
  }
  render(){
    return(
      <div className="entry">
        <ul>
          <EntryContent
            content={this.props.content}
            handleToggleEditing={this.props.handleToggleEditing}
            isEditing={this.props.isEditing}
            handleConentEdits={e => this.props.setContent(e.target.value)}
            index={this.props.index}
            handleEntrySubmit={this.props.handleEntrySubmit}
            handleDelete={e => this.props.handleDelete(e.target.value)}
            handleRemoveEntry={this.props.handleRemoveEntry}
            handleKeyDown={this.handleKeyDown}
          />
        </ul>

        {/*
          <button className={this.props.isEditing ? "save" : "edit"} onClick={this.props.handleToggleEditing}>
            {this.props.isEditing ? "save" : "edit"}
          </button>
        */}
      </div>
    )
  }
}


export default Entry;
