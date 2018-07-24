import React, { Component } from 'react';
import Entry from './Entry.js';


class Entries extends Component{
  render(){
    return(
      <div className="entries">
        {this.props.entries.map((entry, index) =>
            <Entry
              key={index}
              content={entry.content}
              date={entry.date}
              isEditing={entry.isEditing}
              handleToggleEditing={() => this.props.toggleEditing(entry.id)}
              handleRemoveEntry={() => this.props.removeGuestAt(entry.id)}
            />
        )}
      </div>
    )
  }
}


export default Entries;
