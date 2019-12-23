import React, {Component} from "react";
import './Movie.css';

class Movie extends Component {

  render() {
    return (
      <div className='Movie'>
        <input className='MovieName' name="name"
          onChange={event => this.props.change(event, this.props.id)}
          value={this.props.name} 
        />
        <button className='MovieButton' type='button' onClick={event => this.props.remove(event, this.props.id)}>
          <i className="far fa-times-circle"></i>
        </button>
      </div>
    )
  }
};

export default Movie;