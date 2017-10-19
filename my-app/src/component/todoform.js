import React, { Component } from 'react';

class TodoForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.addTask}>
            <input type="text" width="50" height="50"
            value={this.props.currentTask}
            onChange={this.props.updateTask}
            />
            <button className='Submit' type='Submit'>Submit</button>
            </form>
        )
    }
}

export default TodoForm;