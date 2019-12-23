import React, {Component} from "react";
import axios from '../../axios-api';
import Note from '../../components/Note/Note';
import NavigationNotes from '../../components/UI/Navigation/NavigationNotes';

class Notes extends Component {

  state = {
    notes: []
  };

  async componentDidMount() {
    await this.getNotes();
  }

  async getNotes() {
    let url = '/notes.json';

    const response = await axios(url);
    if (response.status === 200) {
      const notes = response.data;
      this.setState({notes});
    }
  }

  delete = async (event, id) => {
    event.preventDefault();
    await this.deleteNote(id);
    const notes = {...this.state.notes};
    delete notes[id];
    this.setState({notes});
    this.getNotes();
  };

  async deleteNote(id){
    await axios.delete('/notes/' + id + '.json');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.getNotes();
    }
  }

  render() {
    const state = this.state.notes;
    let notes = null;
    if (state) {
      notes = (
        Object.keys(state).map(id => (
          <div className='Note' key={id}>
            <Note
              key={id}
              text={state[id].text}
              delete={this.delete}
              id={id}
            />
          </div>
        ))
      ) 
    } if(!state) {
      notes = <div>There are no notes in the database, add a note!</div>;
    }
    return (
      <div>
        <NavigationNotes />
          {notes}
    </div>
    )
  }
};

export default Notes;