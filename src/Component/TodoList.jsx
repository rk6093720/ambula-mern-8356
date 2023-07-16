import React from 'react'
import { TodoContext }  from "../Context/TodoProvider"
import TodoItem from './TodoItem'

function TodoList() {
    return (
        <div >
            <TodoContext.Consumer>
                {state => state.todoList.map((todo) =>  <TodoItem style={{border:"1px solid black"}} key={todo.id} todo={todo} />)}
            </TodoContext.Consumer>
        </div>
    )
}

export default TodoList