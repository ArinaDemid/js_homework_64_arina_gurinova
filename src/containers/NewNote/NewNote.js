import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import axios from '../../axios-api';
import NavigationNotes from '../../components/UI/Navigation/NavigationNotes';

class NewNotes extends Component {

  state = {
    text: ''
  };

  async componentDidMount() {
    if (this.props.match.params.id) {
      const response = await axios('/notes/' + this.props.match.params.id  + '.json');
      if (response.status === 200) {
        const notes = response.data;
        this.setState({text: notes.text});
      }
    }
  }

  valueChange = event => this.setState({[event.target.name]: event.target.value});

  submit = async event => {
    event.preventDefault();

    const note = {
      text: this.state.text
    };
    
    if (this.props.match.params.id) {
      const put = {
        text: this.state.text
      };
      await this.putNote(put);
    } else {
      await this.postNote(note);
    }

    this.setState({text: ''});
    this.props.history.push('/notes');
  };

  async postNote(note){
    await axios.post('/notes.json', note);
  }

  async putNote(put){
    await axios.put('/notes/' + this.props.match.params.id + '.json', put);
  }

  render() {
    let titlePage = null;
    if(this.props.match.params.id) {
      titlePage = <h2 className="NewNote_title">Change a Note</h2>
    } else {
      titlePage = <h2 className="NewNote_title">Submit new Note</h2>
    }

    let button = null;
    if(this.props.match.params.id) {
      button = <Button type="submit" className="NewNote_button">Change</Button>
    } else {
      button = <Button type="submit" className="NewNote_button">Save</Button>
    }

    let formQuote = null;
    if (this.state) {
      formQuote = (
        <div className="NewNote_block">
          {titlePage}
          <Form className="NewNote_form" onSubmit={this.submit}>
            <FormGroup className="NewNote_group">
              <Label for="text">Note text</Label>
              <Input type="textarea" name="text" id="text" onChange={this.valueChange} value={this.state.text}/>
            </FormGroup>
            {button}
          </Form>
        </div>
      )
    }

    return (
      <div>
        <NavigationNotes/>
        {formQuote}
      </div>
    )
  }
};

export default NewNotes;