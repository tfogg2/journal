import React, { Component } from 'react';

class EntryInputForm extends Component {
  render(){
    return(
      <div className="entryInput">
        <ul>
          <form onSubmit={this.props.handleEntrySubmit}>
            <li>
              <input
                type="text"
                onChange={this.props.handleContentInput}
                value={this.props.pendingEntry}
                placeholder=""
                autoFocus="true"
              />
            </li>
            <button
              type="submit"
              name="submit"
              value="submit">Submit

            </button>
          </form>
        </ul>
      </div>
    )
  }
}


export default EntryInputForm;
