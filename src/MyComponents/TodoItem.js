import React from 'react'

const TodoItem = ({todo,onDelete}) => { //this thing inside the curly brackets is called destructuring
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>delete</button>
    </div>
  )
}

export default TodoItem
