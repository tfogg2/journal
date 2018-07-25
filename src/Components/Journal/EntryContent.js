import React, { Component } from 'react';

class EntryContent extends Component{


  componentDidUpdate(){
    if (this.props.isEditing){
      const id = this.props.index;
      this.entryInput.focus();
    }
  }

  render(){
    if (this.props.isEditing){
      return(
        <li>
          <form onSubmit={this.props.handleToggleEditing}>
            <input
              type="text"
              name="entryInput"
              value={this.props.content}
              onChange={this.props.handleConentEdits}
              ref={(input, index) => { this.entryInput = input; }}
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
      <li className="entry-content" onClick={this.props.handleToggleEditing}>
       {this.props.content}
      </li>
    )
  }
}


export default EntryContent;
