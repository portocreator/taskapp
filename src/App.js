import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Posts from "./components/Posts";

class App extends Component {
  state = {
    tasks: tasks,
  };

  //Este metodo lo mandamos por props en el return al TaskForm
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask], //Concatenar la nueva tarea al arreglo que ya se tenia
    });
  };

  //Este metodo se manda a tasks y después a Task
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.filter((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/posts">Posts</Link>
        <Route
          path="/"
          exact={true}
          render={() => {
            return(
            <div>
              <TaskForm addTask={this.addTask} />
              <Tasks
                deleteTask={this.deleteTask}
                checkDone={this.checkDone}
                tasks={this.state.tasks}
              />
            </div>
            )
          }}
        />
        <Route path="/posts" component={Posts} exact={true}/>
      </Router>
    );
  }
}

export default App;
