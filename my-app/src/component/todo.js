import React, { Component } from 'react';


class Todo extends Component {
  render() {
    return (
     
      <li onClick={() =>{
         this.props.clickHandler(this.props.index)
      }
      } className={this.props.detail.completed ? 'completed':''}>
      {this.props.detail.name}
      <button onClick={(evt) =>{
        evt.stopPropagation();
        this.props.delTask(this.props.index)
        }}>Delete</button>
      </li>
    );
  }
}

export default Todo;