import React, { Component } from 'react';
import ToDo from './ToDo';


// this website was my lifeline 
// https://www.kirupa.com/react/simple_todo_app_react.htm


class ToDoList extends Component {
    constructor(props){
      super(props);
      this.state={
        toDos: [],
        counter: 0
    };
    
    //binding is necessary for 'this' to work in the callback
    this.addToDoItem=this.addToDoItem.bind(this);
    this.removeToDoItem=this.removeToDoItem.bind(this);
  }

  addToDoItem(e){
    //create new to do item
    var newToDoItem=
      {
        key: this.state.counter +1,
        toDoItem: this.textInput.value
      };

    //update data 
    this.state.toDos.push(newToDoItem);

    //update state
    this.setState({
      toDos: this.state.toDos,
      counter: this.state.counter +1
    });

    //clear out the text field
    this.textInput.value = '';

    //override the default onsubmit event
    e.preventDefault();
  };


  removeToDoItem(key){
    var filteredItems = this.state.toDos.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      toDos: filteredItems,
      counter: this.state.counter -1
    });
  };


  render() {
      return (
      <div className="toDoListMain">
        <div className="header">
          <h1>{"to do list"} </h1>
          <p>{"click your item to delete :)"}</p>
          <h2>{"number of things to do: " + this.state.counter}</h2>
          <form>
            <input type="text" ref={input => this.textInput=input}></input>
            <button onClick={this.addToDoItem}>add</button>
          </form>
          </div>
            <ToDo entries={this.state.toDos} 
                  delete={this.removeToDoItem}/>
        </div>
      );

  }
}

export default ToDoList;