import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../components/header/Header';
import LeftSideBar from '../../components/leftSideBar/LeftSideBar';
import TittleWithOption from '../../components/tittleWithOption/TittleWithOption';
import ReportScreen from '../report/ReportScreen';
import style from "./BaseScreen.module.scss"

function BaseScreen() {
  return (
    <div className={style.baseScreenWrapper}>
        <div>
            <Header/>
        </div>
        <div className={style.baseScreenBody}>
        <div className={style.leftSide}>
         <LeftSideBar/>
        </div>
        <div className={style.main}>
           <ReportScreen/>

          <Outlet/>
        </div>
        
        </div>
       
    </div>
  )
}

export default BaseScreen