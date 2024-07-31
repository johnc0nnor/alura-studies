import React from 'react';
 import style from "./Buttons.module.scss"

 interface IProps {
    onClick?: () => void
    type?: "button" | "submit" | "reset" | undefined
    children?: React.ReactNode
 }
function Button ({ onClick, type, children }: IProps)  {
       return (
            <button 
            type={type} 
            className={style.botao}
            onClick={onClick}
            >
                {children}
            </button>
        )
    }


export default Button;