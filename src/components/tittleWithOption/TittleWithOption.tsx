import React from 'react'
import style from "./TittleWithOption.module.scss"
import {topIcon , questionIcon , funnelIcon , settingIcon} from "../../assets/svg"

function TittleWithOption() {

    const optionList = [
        {
           name : "Help"  ,
           img :  questionIcon
        },
        {
            name : "Filter"  ,
            img : funnelIcon
         },
         {
            name : "Setting"  ,
            img : settingIcon
         }
    ]

  return (
    <div className={style.tittleWrapper}>
        <div className={style.tittleDiv} >
            <img src={topIcon} alt="img"></img>
            <span>Developer Commit Statistics</span>
        </div>
        <div className={style.options}>
        {
            optionList?.map((data:any , i :number) => {
             return(
                 <img key={data?.name} src={data?.img}></img>
             )
            })
        }
        </div>
    </div>
  )
}

export default TittleWithOption