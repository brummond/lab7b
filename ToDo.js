import React, { Component } from 'react';


class ToDo extends Component {

	constructor(props) {
    	super(props);
 
    	this.createTasks = this.createTasks.bind(this);
  	}
 
	delete(key) {
	   	this.props.delete(key);
	}

	createTasks(item) {
  		return <li onClick={() => this.delete(item.key)} 
        			key={item.key}>{item.toDoItem}</li>
	}


  render() {
  	var toDoEntries = this.props.entries;
  	var listItems = toDoEntries.map(this.createTasks);

    return (
    	<ol className="theList">
    		{listItems}
    	</ol>
    );

  }
}

export default ToDo;