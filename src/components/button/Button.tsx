import React from 'react'
import style from "./Button.module.scss"

interface props{
    extraStyle ?: string
    onClick ?: CallableFunction
    text : string
}

function Button(props : props) {
  return (
    <button
     className={`${style.buttonWrapper} ${props?.extraStyle}`}
     onClick ={(e) =>  props?.onClick && props?.onClick(e)}
    >
     {props.text}
    </button>
  )
}

export default Button