import React from "react";
import { Button } from 'reactstrap';
import './Task.css';

const Task = props => {
  return (
    <div className='Task_item'>
      <p className='Task_description m-0'>{props.description}</p>
      <Button className="Task_delete" color="link"
        onClick={event => props.remove(event, props.id)}>
        <i className="far fa-trash-alt" style={{fontSize: '20px'}}/>
      </Button>
    </div>
  )
};

export default Task;