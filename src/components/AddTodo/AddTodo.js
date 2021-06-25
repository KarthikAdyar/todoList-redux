import React from 'react';
import './addTodo.css'
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

const AddTodo = (props) => {
    return (
        <div>
            <form onSubmit = {(event) => {
                event.preventDefault();
                let input = event.target.userInput.value;
                props.dispatch(addTodo(input))
                event.target.userInput.value = '';
            }}>
                <input id="input-text" type="text" name="userInput" placeholder="Enter a todo" />
                <button id="btn-submit" type="submit">Add</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);