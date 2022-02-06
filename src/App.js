import React, { useEffect, useReducer } from 'react';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import './styles/App.css';
import { Context } from './context/context';
import {reducer} from './reducer/reducer';


function App() {  
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('state')) || []);

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state]);

    return (
        <Context.Provider value={{
            dispatch
        }}>
            <div className="App">
            <h1>Todo app</h1>
            <InputField/>
            <TodoList 
                todos={state} 
            />
            </div>
        </Context.Provider>
    );
}

export default App;
