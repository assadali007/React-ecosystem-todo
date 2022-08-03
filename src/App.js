import React from 'react';
import TodoList from './todos/TodoList';
import './App.css';
import styled from "styled-components";

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;

const App = () => (
    <AppContainer>
        <TodoList />
    </AppContainer>
);
export default App
/*
import React from "react"
import {connect} from "react-redux"
import {increment,decrement} from "./redux";

function App(props) {
    return (
        <div>
            <h1>{props.bananas}</h1>
            <button onClick={props.apples}>-</button>
            <button onClick={props.oranges}>+</button>
        </div>
    )
}

 */

//const mapStateToProps = (globalState) => ({count: globalState})



/*

function mapStateToProps(globalState) {
    // return an object where the keys are the name of the prop your component wants,
    // values are the actual parts of the global state your component wants
    return {
        bananas: globalState
    }
}

const mapDispatchToProps = {
    oranges: increment,
    apples: decrement
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
*/