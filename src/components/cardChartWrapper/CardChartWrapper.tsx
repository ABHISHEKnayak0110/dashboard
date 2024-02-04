import style from "./CardChartWrapper.module.scss"
import {questionIcon} from "../../assets/svg"
import { ReactNode } from "react"

interface props {
  children ?: ReactNode
}

function CardChartWrapper(props : props) {
  return (
    <div className={style.cardChartWrappers}>
        <div className={style.header}>
            <span>Trend of Commit Review Score</span>
            <img src={questionIcon} alt = "img"></img>
        </div>
        <div className={style.chartDiv}>
          {props.children}
        </div>
        <div className={style.infoDiv}>Higher by 50% compared to last week at 500</div>
    </div>
  )
}

export default CardChartWrapper