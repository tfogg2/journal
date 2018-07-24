import React, { Component } from 'react';
import Header from './Components/Header.js';
import Journal from './Components/Journal/Journal.js';
import uuid from 'uuid';
import './App.css';

class App extends Component {

  state = {
    pendingEntry: "",
    entries: []
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
    });

    handleEntrySubmit = e => {
      e.preventDefault();
      const id = uuid.v4();
      const day = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      const date = month + '/' + day + '/' + year;
      this.setState({
        entries: [
          {
            content: this.state.pendingEntry,
            date: date,
            isEditing: false
          },
          ...this.state.entries
        ],
        pendingEntry: ''
      });
    }

  handleContentInput = e =>
    this.setState({ pendingEntry: e.target.value})

  removeEntry = id =>
      this.setState({
        entries: this.state.entries.filter(entry => id !== entry.id)
      })

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
    return (
      <div className="App">

        <Header />

        <Journal
          entries={this.state.entries}
          pendingEntry={this.state.pendingEntry}
          handleContentInput={this.handleContentInput}
          handleEntrySubmit={this.handleEntrySubmit}
          toggleEditing={this.toggleEditing}
        />

      </div>
    );
  }
}

export default App;
