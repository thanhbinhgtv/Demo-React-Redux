// Cách viết ngắn gọn
// export const markComplate = () => dispatch => {
//     dispatch({
//         type: 'MARK_COMPLETE',
//         payload: 'my payload'
//     })
// }

export const markComplate = (id) => {
    const markComplateAction = dispatch => {
        dispatch({
            type: 'MARK_COMPLETE',
            payload: id
        })
    }

    return markComplateAction
}

export const addTodo = newTodo => dispatch => {
    dispatch({
        type: 'ADD_TODO',
        payload: newTodo
    })
}

// Cách viết ngắn gọn
// export const deleteTodo = id => dispatch => {
//     dispatch({
//         type: 'DELETE_TODO',
//         payload: id
//     })
// }

export const deleteTodo = (id) => {
    const deleteTodoAction = dispatch => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }
    return deleteTodoAction
}