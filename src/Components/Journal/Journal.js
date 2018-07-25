import React, { Component } from 'react';
import Entries from './Entries.js';
import PendingEntry from './PendingEntry.js';
import EntryInputForm from './EntryInputForm.js'

class Journal extends Component{
  render(){
    return(
      <div className="journal">
        <EntryInputForm
          pendingEntry={this.props.pendingEntry}
          handleEntrySubmit={this.props.handleEntrySubmit}
          handleContentInput={this.props.handleContentInput}
        />
        <Entries
          entries={this.props.entries}
          toggleEditing={this.props.toggleEditing}
          handleContentEdits={this.props.handleContentEdits}
          setContent={this.props.setContent}
          removeEntry={this.props.removeEntry}
        />
      </div>
    )
  }
}


export default Journal;
