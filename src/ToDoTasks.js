import React, { Component } from 'react';
import './ToDoTasks.css';

class ToDoTasks extends Component {

  render() {
    console.log("In render2()");
    var Tasks2=this.props.Tasks;
    function createTasks(Task)
    {
      return <li key={Task.key}><b>Task:</b> {Task.Task}<br/><b>Key</b>: {Task.key}</li>
    }
    var listTasks=Tasks2.map(createTasks);
    return (
      <ul className="TaskList">
      {listTasks}
      </ul>
    );
  }
}

export default ToDoTasks;
