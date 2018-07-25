import React, { Component } from 'react';
import EntryContent from './EntryContent.js';
class Entry extends Component{
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
