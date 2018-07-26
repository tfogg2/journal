import React, { Component } from 'react';
import Journal from './Journal.js';

class Journals extends Component{
  render(){
    return(
      <Journal
        entries={this.props.entries}
        pendingEntry={this.props.pendingEntry}
        handleContentInput={this.props.handleContentInput}
        handleEntrySubmit={this.props.handleEntrySubmit}
        toggleEditing={this.props.toggleEditing}
        setContent={this.props.setContent}
        removeEntry={this.props.removeEntry}
        handleDelete={this.props.handleDelete}
      />
    )
  }
}

export default Journals;
