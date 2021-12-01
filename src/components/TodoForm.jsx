import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addTodo } from '../store/action/todoActions';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    function onFormSubmit(e){
        e.preventDefault();
        if(title !== '') {
            const newTodo = {
                id : uuidv4(),
                title,
                completed: false,
            }
            console.log(newTodo);
            addTodo(newTodo);
            setTitle('');
        }
    };

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='title' onChange={onTitleChange} value={title} />
                <input type="submit" value='Save' />
            </form>
        </div>
    )
}


const mapStateToProps = state => ({})

export default connect(mapStateToProps, {addTodo})(TodoForm)
