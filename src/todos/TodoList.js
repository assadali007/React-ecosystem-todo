import NewTodoForm from './NewTodoForm';
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";
import {loadTodos, markTodoAsCompletedRequest} from "./thunks";
import {useEffect} from "react";
import {removeTodoRequest} from "./thunks";
import {getTodos,getTodosLoading,getCompletedTodos,getIncompleteTodos} from "./selectors";
import styled from "styled-components";

const ListWrapper = styled.div `
  max-width: 700px;
  margin: auto;

`;

const TodoList = ({completedTodos,incompleteTodos,onRemovePressed,onCompletedPressed,isLoading,startLoadingTodos}) => {

    console.log(completedTodos)

    useEffect(() => {
        startLoadingTodos();
    },[])

    const loadingMessage = <div>loading...</div>


    const content = (
    <ListWrapper>
        <NewTodoForm/>
        <h3>Incomplete:</h3>
        { incompleteTodos.map((item, key) =>
            <TodoListItem
                todo={item}
                key={key}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}

            />
        )}
        <h3>Completed:</h3>
        { completedTodos.map((item, key) =>
            <TodoListItem
                todo={item}
                key={key}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}

            />
        )}
    </ListWrapper>
    );
    return isLoading ? loadingMessage : content
}


const mapStateToProps = globalState => ({
    todos : getTodos(globalState),
    isLoading: getTodosLoading(globalState),
    completedTodos : getCompletedTodos(globalState),
    incompleteTodos : getIncompleteTodos(globalState)
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed : id => dispatch(removeTodoRequest(id)),
    onCompletedPressed : id => dispatch(markTodoAsCompletedRequest(id)),
    startLoadingTodos : () => dispatch(loadTodos())
})

export default  connect (mapStateToProps,mapDispatchToProps) (TodoList)
