import React from 'react'
import AreaCharts from '../charts/areaChart/AreaCharts'
import style from "./AreaChartComp.module.scss"
import {timeIcon} from "../../assets/svg"

const legendData = ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S']

function AreaChartComp() {
  return (
    <div className={style.areaCompWrapper}>
      <div className={style.chartDiv}>
      <AreaCharts/>
      <div className={style.infoDiv}>
         <div><img src={timeIcon}></img></div>
         <div className={style.infoImgTextDiv}>
             <div>
               <h1>10.2</h1>
               <span>AVG</span>
             </div>
             <p>REVIEW SCORE</p>
         </div>
      </div>
      </div>
      <div className={style.legendData}>
      {
          legendData?.map((name:string) => {
              return (
              <div > 
                  <div className={style.dot}> </div>
                  <span>{name}</span>
              </div>
              )
          })
      }
      </div>
      <div className={style.detaisDiv}>

          <div>
            <span>
            142.8
            </span>
            <p>
            Total Reviews
            </p>
          </div>
          <div>
          <span>
            60
            </span>
            <p>
            Contributors
            </p>
          </div>


          </div>
          <div className={style.line}>
              <div ></div>
          </div>
       
    </div>
   
  )
}

export default AreaChartComp