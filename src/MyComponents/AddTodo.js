import React, { useState } from 'react'

const AddTodo = (props) => {
   
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Please fill Title or Description")
        }else{
        props.addTodo(title,desc)
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className="container text-center my-3" >
            <h3 >Enter Your Tasks</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title">Title Of Your Task</label>
                    <input type="text"value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc">Enter Task Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}

export default AddTodo
