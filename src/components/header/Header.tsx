import React from 'react'
import style from "./Header.module.scss"
import {hamberg} from "../../assets/svg"
import ToggleHeader from '../toggleHeader/ToggleHeader'

function Header() {
  return (
    <div className={style.headerWrapper}>
      <div className={style.headerContainer}>
         <img src={hamberg} alt ="img"></img>
         <div className={style.toggleOptions}>
           <ToggleHeader/>
         </div>
      </div>
    </div>
  )
}

export default Header