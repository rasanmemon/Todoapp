import React, { Component } from 'react';

class TodoForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.addTask}>
            <input type="text" 
            value={this.props.currentTask}
            onChange={this.props.updateTask}
            />
            <button type='Submit'>Submit</button>
            </form>
        )
    }
}

export default TodoForm;