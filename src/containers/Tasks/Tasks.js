import React, {Component} from 'react';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';
import Task from '../../components/Task/Task';
import nanoid from 'nanoid';
import axios from '../../axios-api';

class Tasks extends Component {
  
  state = {
    tasks: [],
    taskNew: ''
  };
  
  async componentDidMount() {
    const response = await axios('/tasks.json');
    if (!response.data) {
      const tasks = [
        {id: nanoid(), description: 'Buy milk'},
        {id: nanoid(), description: 'Walk with the dog'},
        {id: nanoid(), description: 'Do homework'}
      ];
      tasks.forEach(task => 
        axios.post('/tasks.json', task)
      );
    }
    await this.getTasks();
  }

  async getTasks() {
    const response = await axios('/tasks.json');
    if (response.status === 200) {
      const tasks = response.data;
      this.setState({tasks});
    }
  }

  removeTask = async (event, id) => {
    event.preventDefault();
    await axios.delete('/tasks/' + id + '.json');
    const tasks = {...this.state.tasks};
    delete tasks[id];
    this.setState({tasks});
  };

  onChange = event => {
    this.setState({taskNew: {id: nanoid(), description: event.target.value}});
  };

  onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/tasks.json', this.state.taskNew);
    await this.getTasks();
  };
  
  render() {
    const state = this.state.tasks;
    let tasks = null;
    if (state) {
      tasks = (
        Object.keys(state).map(id => (
          <div className='Task' key={id}>
            <Task
              key={id}
              id={id}
              description={state[id].description}
              remove={this.removeTask}
            />
          </div>
        ))
      ) 
    }
    return (
      <div>
        <AddTaskForm addTask={this.onChange} submit={this.onSubmit}/>
        {tasks}
      </div>
    );
  }
};
    
export default Tasks;  