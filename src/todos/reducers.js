import {
    CREATE_TODO,
    LOAD_TODOS_FAILURE,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    MARK_TODO_AS_COMPLETED,
    REMOVE_TODO
} from "./actions";




const initialState = {
    isLoading : false,
    data : []
}

export const todos = (state = initialState,action) => {
    switch (action.type) {
        case CREATE_TODO: {
            const text = action.payload
            return  {
                ...state,
                data : state.data.concat(text)

            }

        }


        case REMOVE_TODO : {

            // use a rename
            const { todo: todoToRemove } = action.payload;
            return {
                ...state,
                data : state.data.filter(todo => todo.id !== todoToRemove.id)
            }

        }


        case MARK_TODO_AS_COMPLETED: {
            const { todo: updatedTodo } = action.payload;
            return {
                ...state,
                data : state.data.map(todo => {
                    if (todo.id === updatedTodo.id) {
                        return updatedTodo;
                    }
                    return todo;
                }),
            };

        }
        case LOAD_TODOS_SUCCESS : {

            const todos = action.payload;
            return {
                ...state,
                isLoading: false,
                data:todos,
            };

        }
        case LOAD_TODOS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            }
        case LOAD_TODOS_FAILURE :
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}