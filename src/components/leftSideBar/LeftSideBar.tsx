import React from 'react'
import style from "./LeftSideBar.module.scss"
import {homeIcon , allIcon} from "../../assets/svg"
function LeftSideBar() {
    const iconList = [
        {
          name : "Home",
          img : homeIcon
        },
        {
            name : "All",
            img : allIcon
        }
    ]
  return (
    <div className={style.leftSideBarWrapper}>
        <div className={style.leftSideList}>
            {
                iconList?.map((e : any , i:number) => {
                    return(
                      <div key={e?.name}>
                      <img src={e?.img}></img>
                     </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default LeftSideBar