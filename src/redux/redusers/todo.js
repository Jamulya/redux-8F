const ADD = 'ADD'
const DELETE = 'DELETE'
const IMPORTANT = 'IMPORTANT'
const DONE = 'DONE'
const DELETE_ALL = 'DELETE_ALL'
const EDIT = 'EDIT'
const EDIT2 = 'EDIT2'


const initialState = {
    todos: [
        {
            id: 1,
            title: 'eat',
            isDelete: false,
            isImportant: false,
            isDone: false,
            change: false

        }
    ],
    count: 0
}


export default(state = initialState,action) => {
    switch(action.type){
        case ADD: {
            return{
                ...state,
                todos: [...state.todos, {title: action.title,
                    id: state.todos.length ? state.todos[state.todos.length -1].id + 1 : 1
                }]
            }
        }
        case DELETE: {
            return{
                ...state,
                todos: state.todos.filter((item) => item.id !== action.id),
                count: - 1

            }
        }
        case IMPORTANT: {
            return{
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return{
                            ...item, isImportant:!item.isImportant
                        }
                    }
                    return item
                }),
            }
        }
        case DONE: {
            return{
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return {
                            ...item, isDone: !item.isDone
                        }
                    }
                    return item
                })
            }
        }

        default: return state;
    }
}


export const addTodo = (title) => {
    return (dispatch) => {
        return dispatch({type: ADD, title})
    }
}
export const DeleteTodo = (id) => {
    return (dispatch) => {
        return dispatch({type: DELETE, id})
    }
}
export const doImportant = (id) => {
    return(dispatch) => {
        return dispatch({type: IMPORTANT, id})
    }
}
export const doDone = (id) => {
    return(dispatch) => {
        return dispatch({type: DONE, id})
    }
}