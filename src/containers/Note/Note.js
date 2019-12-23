import React, {Component} from "react";
import {Card, CardText, CardBody} from 'reactstrap';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Note.css';

class Note extends Component {

  state = {
    id: ''
  };

  async componentDidMount() {
    this.setState({id: this.props.id});
  } 
  
  render() {
    return (
      <div>
        <Card className="Note_block">
          <CardBody>
            <NavLink to={'/notes/' + this.state.id + '/edit'}><i className="button_edit fas fa-edit" style={{fontSize: '20px'}}/></NavLink>
            <Button className="button_delete" color="link" 
              onClick={event => this.props.delete(event, this.state.id)}>
              <i className="far fa-trash-alt" style={{fontSize: '20px'}}/>
            </Button>
            <CardText>Text note: {this.props.text}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
};

export default Note;
