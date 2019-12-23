import React, { Component } from "react";
import {Button, Form, FormGroup, Input} from 'reactstrap';

class AddTaskForm extends Component {

  render() {
    return (
      <Form inline className="taskForm mb-4 mt-4" onSubmit={this.props.submit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input required type="text" name="text" id="task" placeholder="Add new task" 
            onChange={this.props.addTask}
          />
        </FormGroup>
        <Button>Add</Button>
      </Form>
    );
  }
}

export default AddTaskForm;