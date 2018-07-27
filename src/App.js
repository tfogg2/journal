import React, { Component } from 'react';
import Header from './Components/Header.js';
import Journals from './Components/Journals/Journals.js';
import uuid from 'uuid';
import moment from 'moment';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import FormatToolbar from './Components/FormatToolbar.js';
import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/feather/bold';
import { italic } from 'react-icons-kit/feather/italic';
import { list } from 'react-icons-kit/feather/list';
import { underline } from 'react-icons-kit/feather/underline';
import { code } from 'react-icons-kit/feather/code';
import './App.css';

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})

function BoldMark(props) {
  return <strong>{props.children}</strong>
}

function MarkHotkey(options) {
  const { type, key } = options

  return {
    onKeyDown(event, change) {
      // Check that the key pressed matches our `key` option.
      if (!event.ctrlKey || event.key != key) return

      event.preventDefault()

      change.toggleMark(type)
      return true
    },
  }
}

const boldPlugin = MarkHotkey({
  type: 'bold',
  key: 'b',
})

const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: '`', type: 'code' }),
  MarkHotkey({ key: 'i', type: 'italic' }),
  MarkHotkey({ key: '~', type: 'strikethrough' }),
  MarkHotkey({ key: 'u', type: 'underline' }),
]

class App extends Component {

  state = {
    pendingEntry: "",
    entries: [],
    journals: [],
    value: initialValue,
  }

  componentDidUpdate() {
    this._commitAutoSave();
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  _commitAutoSave = () => {

  }

  onMarkClick = (e, type) => {
    e.preventDefault();

    const { value } = this.state;

    const change = value.change().toggleMark(type);

    this.onChange(change);
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

  renderMark = props => {
     switch (props.mark.type) {
       case 'bold':
         return <strong>{props.children}</strong>
       // Add our new mark renderers...
       case 'code':
         return <code>{props.children}</code>
       case 'italic':
         return <em>{props.children}</em>
       case 'strikethrough':
         return <del>{props.children}</del>
       case 'underline':
         return <u>{props.children}</u>
       case 'list':
        return (
          <ul {...props.attributes}>
            <li>{props.children}</li>
          </ul>
        );
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

        {/*
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
        */}

        <div className="editor">

          <FormatToolbar
            renderMark={this.renderMark}
            onMarkClick={this.onMarkClick}
          />

          <Editor
            value={this.state.value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            renderMark={this.renderMark}
            plugins={plugins}
            className="editContent"
          />
        </div>

      </div>
    );
  }
}

export default App;
