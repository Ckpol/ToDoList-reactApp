import React, { useState, useContext } from 'react';
import { Context } from '../../context/context';
import MyButton from '../UI/MyButton/MyButton';
import cl from './InputField.module.css';

const InputField = () => {
    const [inputTitle, setInputTitle] = useState('');
    const {dispatch} = useContext(Context);
    
    const inputKeyHandler = (evt) => {
        const value = evt.target.value;
        if (evt.key === 'Enter') {
            if (value.length === 0 || value === ' ') {
                return;
            }
            dispatch({
                type: 'add',
                payload: value
            });
            setInputTitle('');
        }
        return;
    }

    const inputClickHandler = () => {
        if (inputTitle.length === 0 || inputTitle === ' ') {
            return;
        }
        dispatch({
            type: 'add',
            payload: inputTitle
        });
        setInputTitle('');
    }

    return (
        <div className={cl.container}>
            <input 
                className={cl.myInput} 
                type="text" 
                placeholder="ToDo name"
                value={inputTitle}
                onKeyDown={inputKeyHandler}
                onChange={(evt) => setInputTitle(evt.target.value)}
            >

            </input>
            <MyButton 
                title="Add"
                inputClickHandler={inputClickHandler}
            />
        </div>
    )
}

export default InputField;