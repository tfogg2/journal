import React, { Component } from 'react';
import keydown from 'react-keydown';

class EntryContent extends Component{
  render(){
    if (this.props.isEditing){
      return(
        <li>
          <form onSubmit={this.props.handleEntrySubmit}>
            <input
              type="text"
              name="entryInput"
              value={this.props.content}
              onChange={this.props.handleConentEdits}
              onKeyDown={this.props.handleKeyDown}
            />
            <button
              type="submit"
              name="submit"
              className="entryInputSubmit"
              value="submit">
            </button>
          </form>
        </li>
      );
    }
    return (
      <li className="entry-content">
       {this.props.content}
      </li>
    )
  }
}


export default EntryContent;
