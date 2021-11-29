import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TodoForm from './TodoForm';

const Todos = () => {

    return (
        <div className='todo-list'>
            <TodoForm />
            <ul>
                {todo.map(todo =>
                    <li key={todo.id}>
                        {todo.title}
                        <input type='checkbox' />
                        <button>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todos
