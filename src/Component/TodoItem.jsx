import React, { useContext } from 'react'
import { useState } from 'react';
import { TodoContext } from "../Context/TodoProvider";
function TodoItem({ todo }) {
    const [toggleUpdate, setToggleUpdate] = useState(false);
    const todoContext = useContext(TodoContext);
    const [name, setName] = useState(todo.title);
    return (
        <div className="todo-item" style={{ display:"flex", width:"50%",height:"50px", margin:"auto"}}>
            <div className="id" style={{border:"1px solid black",width:"10%",marginTop:"5px"}}>#{todo.id[0]}</div>
            {toggleUpdate ?
                <input style={{width:"100%",height:"100%"}}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form" type="text" /> :
                <div className="title" style={{border:"1px solid black",width:"40%",marginTop:"5px"}}>{todo.title}</div>
            }
            <div className="buttons" style={{ display:"flex", width:"50%",height:"50px", margin:"auto"}}>
                <button style={{border:"1px solid black",width:"50%",marginTop:"5px"}}
                    onClick={() => {
                        setToggleUpdate(!toggleUpdate);
                        if (name !== '') {
                            todoContext.updateTodo({
                                id: todo.id,
                                title: name
                            });
                            // setName("");
                        }
                    }}
                    className='buttonhandler'>
                    {toggleUpdate ? "UPDATE" : "EDIT"}
                </button>
                <button style={{border:"1px solid black",width:"60%",marginTop:"5px"}}
                    onClick={() => {
                        todoContext.removeTodo(todo.id);
                    }}
                    className="btn-delete">DELETE</button>
            </div>
        </div>
    )
}

export default TodoItem