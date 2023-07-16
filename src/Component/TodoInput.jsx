import React, { useContext, useState } from 'react'
import { TodoContext } from "../Context/TodoProvider"
import { v1 } from 'uuid';
function TodoInput() {
    const [name, setName] = useState("")
    var todoContext = useContext(TodoContext);
    return (
        <>
          <h1>Todos</h1>
        <div className="row">
            <input style={{width:"50%", height:"50px",fontSize:"24px"}} value={name}
             onChange={(e) => setName(e.target.value)}
              placeholder="ex. do coding" className="control"
               type="text" />
            <button style={{width:"200px",height:"55px",color:"white", backgroundColor:"red", fontSize:"24px"}}
                onClick={() => {
                    if (name !== "") {
                        todoContext.addTodo({
                            id: v1(),
                            title: name
                        })
                        setName("");
                    }
                }}
                className="btn-primary">ADD</button >
        </div>
        </>
    )
}

export default TodoInput