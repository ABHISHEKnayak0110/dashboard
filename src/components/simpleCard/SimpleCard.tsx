import React from 'react'
import style from "./SimpleCard.module.scss"

interface props{
    data : Record<string, string |number>
}

function SimpleCard(props : props) {

  return (
    <div className={style.simpleCardWrapper}>
         <div > {props.data?.title}</div>
         <p>{props.data?.value} </p>
    </div>
  )
}

export default SimpleCard