import React, { Component } from 'react';

class EntryContent extends Component{

    componentDidUpdate(){

    }


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
              ref={c => (this._input = c)}
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
