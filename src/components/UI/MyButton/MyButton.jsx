import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ({title, inputClickHandler}) => {
    return(
        <button 
            className={cl.btn}
            onClick={inputClickHandler}
        >
            {title}
        </button>
    )
};

export default MyButton;