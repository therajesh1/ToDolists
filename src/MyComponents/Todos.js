import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {
    let myStyle={
        minHeight:"60vh"
    }
  return (
    <div className='container' style={myStyle}>
      <h3 className="text-center">Todos list</h3>
      {props.todos.length===0? "there are zero tasks":
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
      
    </div>
  )
}
export default Todos

