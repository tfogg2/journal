import React, { Component } from 'react';

class EntryInputForm extends Component {

  componentDidMount(){
    this._input.focus();
  }

  handleKeyDown = (event, id) => {
    var KeyId = event.keyCode;

    if (KeyId === 8 && this.props.pendingEntry === '') {
      console.log(KeyId)
    }
    if (KeyId === 46 && this.props.content === '') {
        {this.props.handleRemoveEntry(id)}
    }
  }

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
                ref={c => (this._input = c)}
                placeholder=""
                autoFocus="true"
                onKeyDown={this.handleKeyDown}
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
