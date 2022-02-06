import React, { useContext, useState } from 'react';
import { Context } from '../../context/context';
import cl from './TodoItem.module.css';


const TodoItem = ({id, text, completed}) => {
    const classes = [];
    const {dispatch} = useContext(Context);
    
    if (completed) {
        classes.push(cl.completed);
    }

    return (
        <li className={cl.item}>
            <label className={cl.myCheckbox}>
                <input 
                    type="checkbox"
                    checked={completed}
                    onChange={() => dispatch({
                        type: 'toogle',
                        payload: id
                    })}
                ></input>
                <span className={classes.join(' ')}>{text}</span>
            </label>
            <i 
                className="material-icons"
                onClick={()=> dispatch({
                    type: 'remove',
                    payload: id
                })}
            >
                delete
            </i>
        </li>
    )
};

export default TodoItem;