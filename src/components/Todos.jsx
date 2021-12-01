import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TodoForm from './TodoForm';
import {markComplate, deleteTodo} from '../store/action/todoActions'

const Todos = ({ todos, markComplate, deleteTodo }) => {
    console.log('todos',todos);

    return (
        <div className='todo-list'>
            <TodoForm />
            <ul>
                {todos.map(todo =>
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        <input type='checkbox' onChange={() => markComplate(todo.id)} />
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

Todos.prototype = {
    todos: PropTypes.array.isRequired,
    markComplate: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos,
})

export default connect(mapStateToProps, {markComplate, deleteTodo})(Todos)
