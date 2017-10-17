import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoForm from './component/todoform.js';
import Todo from "./component/todo"
//import registerServiceWorker from './registerServiceWorker';
class TodoApp extends React.Component {
    constructor(){
      super();
      this.changeStatus=this.changeStatus.bind(this);
      this.updateTask=this.updateTask.bind(this);
      this.addTask=this.addTask.bind(this);
      this.delTask=this.delTask.bind(this);
      this.state={
        Todolist:[
    //       {name:"rasan",
    //       completed:false
    //     },
    //   {
    //    name:"umer",
    //    completed:false 
    //   }
        ],
      currentTask:''
      };
    }
  changeStatus(index){
      var Todolist = this.state.Todolist
      var task = Todolist[index]
      task.completed =!task.completed
      this.setState({
          Todolist:Todolist
      })
    //console.log(this.state.Todolist[index])
  }
  updateTask(newValue){
    this.setState({
        currentTask:newValue.target.value
    })
  }
  delTask(index){
    // console.log(index)
    let Todolist=this.state.Todolist
    Todolist.splice(index,1)
    this.setState({
        Todolist
    })
  }
  addTask(evt){
      evt.preventDefault()
      let Todolist = this.state.Todolist
      let currentTask=this.state.currentTask
      Todolist.push({
          name:currentTask,
          completed:false
      })
      this.setState({
          Todolist,
          currentTask:'',
      })
  }

    render() {
      return (
          <section>
              <TodoForm
               currentTask={this.state.currentTask} 
               updateTask={this.updateTask}
               addTask={this.addTask}/>
          
        <ul>
            {
                this.state.Todolist.map((todo , index) =>{
                    return (<Todo 
                    key={todo.name}
                     index={index}
                     delTask={this.delTask}
                     clickHandler={this.changeStatus}
                      detail={todo}/>)
                })
            }
        </ul>
        </section>
      );
    }
  }
ReactDOM.render(<TodoApp />, document.getElementById('root'));
//registerServiceWorker();
