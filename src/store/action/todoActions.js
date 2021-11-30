export const markComplate = (id) => {
    const markComplateAction = dispatch => {
        dispatch({
            type: 'MARK_COMPLETE',
            payload: id
        })
    }

    return markComplateAction
}


// Cách viết ngắn gọn
// export const markComplate = () => dispatch => {
//     dispatch({
//         type: 'MARK_COMPLETE',
//         payload: 'my payload'
//     })
// }