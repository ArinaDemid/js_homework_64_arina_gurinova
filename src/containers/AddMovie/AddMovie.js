import React from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './AddMovie.css';

const AddMovie = props => {
  return (
    <Form inline className="AddMovie-form" onSubmit={props.submit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input required type="text" name="text" id="movieName" placeholder="Enter new movie name" 
          onChange={props.add} 
          value={props.name}
        />
      </FormGroup>
      <Button>Add</Button>
    </Form>
  )
};

export default AddMovie;