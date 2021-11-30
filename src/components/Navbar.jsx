import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const Navbar = ({ nav }) => {
    return (
        <div className='navbar'>
            <h1>My Redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos : {nav.length}</li>
            </ul>
        </div>
    )
}

Navbar.prototype = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    nav: state.myTodos.todos
})

export default connect(mapStateToProps, {})(Navbar)
