import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import cl from './TodoList.module.css';

const TodoList = ({todos}) => {
    return (
        <div className={cl.todoList}>
            <ul>
                {todos.map((elem) => {
                    return <TodoItem 
                                key={elem.id} 
                                text={elem.text} 
                                id={elem.id} 
                                completed={elem.completed}
                                
                            />
                })}
               
            </ul>
        </div>
    )
};

export default TodoList;