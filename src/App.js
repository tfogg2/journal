import React, { Component } from 'react';
import Header from './Components/Header.js';
import Journals from './Components/Journals/Journals.js';
import uuid from 'uuid';
import moment from 'moment'
import './App.css';

class App extends Component {

  state = {
    pendingEntry: "",
    entries: [],
    journals: []
  }

  componentDidUpdate() {
    this._commitAutoSave();
  }

  _commitAutoSave = () => {

  }

  setContent = (content, id) =>
    this.setState({
      entries: this.state.entries.map(entry => {
        if (id === entry.id){
          return {
            ...entry,
            content
          };
        }
        return entry;
      })
    })

    validateSubmission = () => {
      let valid = true;
      const pendingEntry = this.state.pendingEntry;
      // Validate that pending entry is not blank
      if (pendingEntry || pendingEntry === '') {
        valid = false
      }
      // if last entry was today == valid
      // one journal per day validation
      return valid
    }

    handleEntrySubmit = e => {
      // let invalid = true ...
      e.preventDefault();
      const id = uuid.v4();
      const date = moment().format();
      this.setState({
        entries: [
          ...this.state.entries,
          {
            content: this.state.pendingEntry,
            date: date,
            isEditing: true,
            id: id
          }
        ],
        pendingEntry: ''
      });
    }

  handleContentInput = e =>{
    this.setState({
      pendingEntry: e.target.value,
    })
  }


  removeEntry = id =>
      this.setState({
        entries: this.state.entries.filter(entry => id !== entry.id)
      })

  handleDelete = (e) => {
    console.log('hello');
    var KeyId = e.target.keyCode;
    console.log(KeyId)
    if (e.keyCode === 8) {
        console.log('BACKSPACE was pressed');
    }
    if (e.keyCode === 46) {
        console.log('DELETE was pressed');
    }
  }

  toggleEntryProperty = (property, id) =>
    this.setState({
      entries: this.state.entries.map(entry => {
        if (id === entry.id){
          return {
            ...entry,
            [property]: !entry[property]

          };
        }
        return entry;
      })
    });

  toggleEditing = id =>
    this.toggleEntryProperty("isEditing", id);


  render() {

    const todaysDate = moment().format("MMMM Do YYYY");

    return (
      <div className="App">

        <Header todaysDate={todaysDate}/>

        <Journals
          entries={this.state.entries}
          pendingEntry={this.state.pendingEntry}
          handleContentInput={this.handleContentInput}
          handleEntrySubmit={this.handleEntrySubmit}
          toggleEditing={this.toggleEditing}
          setContent={this.setContent}
          removeEntry={this.removeEntry}
          handleConentEdits={this.handleConentEdits}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}

export default App;
