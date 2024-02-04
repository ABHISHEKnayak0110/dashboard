import React from 'react'
import HorizontalBarChart from '../charts/horizontalBarChart/HorizontalBarChart'
import Circle from '../circle/Circle'
import style from "./HorizontalBarComp.module.scss"

const Date = "MAY 24"

const legendsData = [
    {
        name :  "Issues Assigned",
        color : "#FF9B85"
    },
    {
        name :  "Issues Resolved",
        color : "#17BEBB"
    },
    {
        name :  "Issues In Progress",
        color : "#EE6055"
    }
]

function HorizontalBarComp() {
  return (
    <div className={style.horizontalBarCompWrapper}>
      <div className={style.date}>{Date}</div>
      <div className={style.barContainer}>
      <HorizontalBarChart/>
      </div>
      <div className={style.legends}>
      {
          legendsData?.map((details:any, i : number) => {
          return(
            <div className={style.details}>
                <Circle color={details?.color}/>
                <p>{details?.name}</p>
             </div>
          )
          })
      }
       



      </div>
        <div className={style.info}>
          <h1>15 days</h1>
           <p>Average Issues Completion Time</p>
      </div>

   
    </div>
  )
}

export default HorizontalBarComp