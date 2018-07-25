import React, { Component } from 'react';

class EntryInputForm extends Component {
  render(){
    return(
      <div className="entryInput">
        <form onSubmit={this.props.handleEntrySubmit}>
            <input
              type="text"
              onChange={this.props.handleContentInput}
              value={this.props.pendingEntry}
              placeholder="Create an entry"
            />
            <button
              type="submit"
              name="submit"
              value="submit">Submit

            </button>
        </form>
      </div>
    )
  }
}


export default EntryInputForm;
