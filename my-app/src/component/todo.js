import React, { Component } from 'react';


class Todo extends Component {
  constructor(){
    super();
    this.state = {
      isEditing:false
    }
    this.renderForm = this.renderForm.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.toogleState = this.toogleState.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  updateItem(evt){
     evt.preventDefault();
    console.log (this.input.value);
    this.props.editTask(this.props.index, this.input.value);
    this.toogleState();
  }
  toogleState(){
    const {isEditing}=this.state
    this.setState({
      isEditing:!isEditing
    })
  }
  renderItem(){
    return(
      <li onClick={() =>{
        this.props.clickHandler(this.props.index)
     }
     } className={this.props.detail.completed ? 'completed':''}>
     {this.props.detail.name}
     <button className='Delete' onClick={(evt) =>{
       evt.stopPropagation();
       this.props.delTask(this.props.index)
       }}>Delete</button>
       <button className='Delete' onClick={(evt) =>{
       evt.stopPropagation();
       this. toogleState()
       }}>EditItem</button>
     </li>
    )
  }
  renderForm(){
    return(
      <form onSubmit={this.updateItem}>
      <input width="50" height="50" type='text'  ref={(value)=>{this.input= value}}
      defaultValue={this.props.detail.name}/>
      <button className="updateItem" type='Submit'>UpdateItem</button>
    </form> 
    )
  }

  render() {
    const { isEditing } = this.state;
    return (
     <section>
       {
         isEditing ? this.renderForm():this.renderItem()
       }
      </section>
    );
  }
}

export default Todo;