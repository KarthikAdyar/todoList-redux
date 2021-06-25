import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions'
import './list.css'
const List = ( props ) => {
    return(
        <div>
            <ul className="all-todo">
                {props.todos.map((todo , index) => (
                    <li  className="single-todo" key={index}>
                    <span className="todo-text">{todo.message}</span>
                    <button id="btn-delete" onClick={() => props.dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateToProps)(List);