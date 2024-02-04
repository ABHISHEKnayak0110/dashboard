import React, { useState } from 'react'
import AreaChartComp from '../../components/areaChart/AreaChartComp'
import Button from '../../components/button/Button'
import CardChartWrapper from '../../components/cardChartWrapper/CardChartWrapper'
import CardLineChartWrapper from '../../components/cardLineChartWrapper/CardLineChartWrapper'
import CardTable from '../../components/cardTable/CardTable'
import HorizontalBarComp from '../../components/horizontalBar/HorizontalBarComp'
import SimpleCard from '../../components/simpleCard/SimpleCard'
import TittleWithOption from '../../components/tittleWithOption/TittleWithOption'
import style from "./ReportScreen.module.scss"


function ReportScreen() {
    const [optionForTable , setoptionForTable] = useState<any>( {
        name : "Commits"
    },)
   
    const simpleCardData = [
        {
            title : "123456" , 
            value : "New Lines of Code"
        },
        {
            title : "5234" , 
            value : "Commits Added"
        },
        {
            title : "124" , 
            value : "Total Dev Branches Created"
        },
        {
            title : "2345" , 
            value : "Total Branches Merged"
        }
    ]

    /**For Table  */
    const buttonOptions = [
        {
            name : "Commits"
        },
        {
            name : "Pull Request"
        },
        {
            name : "Jira Issues"
        }
    ]

    const handleClickOption =(data: Record<string , string>) => {
        setoptionForTable(data)
    }

    /******End Table*****/

  return (
    <div className={style.reportScreenWrapper}>
        <div> <TittleWithOption/> </div>
 
        <div className={style.simpleCardContainer}>
          {
              simpleCardData?.map(
                  (data :any , i :number) => {
                      return (
                        <div key={data?.title} >
                         <SimpleCard data ={data}/>
                         </div>
                      )
                  }
              )
          }
        </div>
         <div  className={style.chartCardContainer}>
                 <CardChartWrapper>
                <AreaChartComp/>
                </CardChartWrapper>


              <CardChartWrapper>
               <HorizontalBarComp/>
             </CardChartWrapper>

         </div>
         <div className={style.cardLineChartContainer}>
             <CardLineChartWrapper/>
         </div>

        <div className={style.tableButtonContainer}>
    
          <div className={style.buttonDiv}>
              {
                  buttonOptions?.map((data:any) => {
                      return  <div>
                          <Button 
                          text={data?.name}
                          extraStyle ={data?.name === optionForTable?.name ?  style.buttonHighlight : style.button}
                          onClick ={() =>handleClickOption(data)}
                          />
                          </div>
                  })
              }
          </div>
          <div className={style.tableCardDiv}>
          <CardTable/>
          </div>
        </div>

    </div>
  )
}

export default ReportScreen