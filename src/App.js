import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';

// class based components 
// function based components 
function App() {
  let initTodo;
  if (localStorage.getItem("todos") ===null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log('i am ondelete', todo);
    // deleting in react in this way does not work
    // let index=todos.indexOf(todos);
    // todos.splice(index,1);
    //filter is a higher order array method
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage.getItem(todos);
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
    console.log("I am Adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    // localStorage.setItem("todos",JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
