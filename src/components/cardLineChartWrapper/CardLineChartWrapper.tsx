import { useState } from "react"
import LinesChart from "../charts/lineChart/LinesChart"
import Circle from "../circle/Circle"
import Dropdown from "../dropdown/Dropdown"
import style from "./CardLineChartWrapper.module.scss"

const option :any =[
    "Time Taken To Merge",
    "Line of Code",
    "Commits",
    "Branches"
]
const legendsData = [
  {
    name : "New Lines Added",
    value : "20",
    color : "#9166F2"
  },
  {
    name : "Lines Removed",
    value : "14",
    color : "#FFBE3F"
  }
  
]
function CardLineChartWrapper() {
    const [optionSelected , setOptionSelected] = useState(option[0])
  return (
    <div className={style.cardLineChartWrapper}>
    <div className={style.header}>
    <span>Trend of Commit Activities</span>
    <div className={style.dropdownDiv}>
    <Dropdown 
     extraStyleDropdown ={style.dropdownHeader}
     optionList={option}
     defaultText ={optionSelected}
    
     setDataOutside ={() =>console.log()}/>
    </div>
 
    </div>
    <div className={style.chartDiv}>  
     <LinesChart/>
    </div>
    <div className={style.legends}>
    {
       legendsData?.map((data :any , i : number) => {
         return (
           <div key={i} > 
           <div className={style.legendDiv}><span>{data?.value}</span> <Circle color={data?.color}/></div>
           <div className={style.legendName}>
             {
               data?.name
             }
           </div>
           </div>
         )
       })
     }


    </div>
     
    </div>
  )
}

export default CardLineChartWrapper