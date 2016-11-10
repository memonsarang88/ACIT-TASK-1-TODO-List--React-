import React, { Component } from 'react';
import './ReactToDoApp.css';
import ToDoTasks from './ToDoTasks'
class ReactToDoApp extends Component {
  constructor()
  {

    super();

    this.state={
      Tasks: []
    };
    this.addTask = this.addTask.bind(this);
  }
  addTask(e)
  {
    console.log("In addTask");
    if(this.taskField.value!=="")
    {
    var TaskArray=this.state.Tasks;
    console.log("Mid addTask");
    TaskArray.push({
      Task: this.taskField.value,
      key: Date.now()
    });
    console.log("Mid2 addTask");
    this.setState({
      Tasks:TaskArray
    });
    console.log("Mid3 addTask");
    this.taskField.value="";
  }
    console.log("Out addTask");
  }
  render() {
    console.log("In render()");
    return (
      <div className="ReactToDoApp">
        <div className="Header">
          <h2>ACIT React-task#1 To Do App</h2>
        </div>
        <div className="AddToDo">
          <input className="taskInput" ref={(a)=>this.taskField=a} placeholder="Add task"/>
          <button className="GeneralAdd" onClick={this.addTask}>ADD</button>
        </div>
        <div className="TaskListDiv">
        <ToDoTasks Tasks={this.state.Tasks}/>
        </div>
      </div>
    );
  }
}

export default ReactToDoApp;
