
import style from "./CardTable.module.scss"
import {searchIcon , kpifilterIcon , filterIcon , prMasterIcon,prTestIcon} from "../../assets/svg"
import Table from "../table/Table"
import { useState } from "react"



/***Table Data  */

const data = [
    {
        commitId : "131535187135",
         dateOfCommit : "2022-06-19",
         branchName : "test",
         timeTaken : "4 days",
         linesRemoved : "5",
         linesAdded  : "12"
    },
    {
        commitId : "153164376",
         dateOfCommit : "2022-01-12",
         branchName : "test-master",
         timeTaken : "6 days",
         linesRemoved : "3",
         linesAdded  : "23"
    },
    {
        commitId : "15323164371",
         dateOfCommit : "2022-03-29",
         branchName : "main",
         timeTaken : "8 days",
         linesRemoved : "63",
         linesAdded  : "32"
    },
    {
        commitId : "15753714531",
         dateOfCommit : "2021-04-25",
         branchName : "master",
         timeTaken : "10 days",
         linesRemoved : "13",
         linesAdded  : "43"
    },
    {
        commitId : "12542364761",
         dateOfCommit : "2022-06-19",
         branchName : "IN-31531",
         timeTaken : "12 days",
         linesRemoved : "43",
         linesAdded  : "645"
    },
    {
        commitId : "16413575424",
         dateOfCommit : "2022-01-12",
         branchName : "IN-31516",
         timeTaken : "6 days",
         linesRemoved : "23",
         linesAdded  : "23"
    }
]

let column = [
    {
        displayName : "Commit Id",
        key : "commitId",
        render : (data :any, key :string , index?:number) => {
           return(
               <div className={style.commitIdDiv}>
                    <img src={index &&(index % 5 ==0 || index === 1) ? prMasterIcon : prTestIcon}></img>
                    <span>{data?.[key]}</span>
               </div>
              
           )
        }
    },
    {
        displayName : "Date of Commit",
        key : "dateOfCommit",
        render : (data :any, key :string) => {
           return(
               <span>{data?.[key]}</span>
           )
        }
    },
    {
        displayName : "Branch Name",
        key : "branchName",
        render : (data :any, key :string) => {
           return(
               <span>{data?.[key]}</span>
           )
        }
    },
    {
        displayName : "Time Taken",
        key : "timeTaken",
        render : (data :any, key :string) => {
           return(
               <span>{data?.[key]}</span>
           )
        }
    },
    {
        displayName : "Lines Removed",
        key : "linesRemoved",
        render : (data :any, key :string) => {
           return(
               <span>{data?.[key]}</span>
           )
        }
    },
    {
        displayName : "Lines Added",
        key : "linesAdded",
        render : (data :any, key :string) => {
           return(
               <span style={{color : "#7947CA"}}>{data?.[key]}</span>
           )
        }
    }
   
]

function CardTable() {
   const [showInput , setShowInput] = useState(false)
    const handleInputeShow = () => {
     setShowInput(!showInput)
    }
  return (
    <div className={style.cardTableWrapper}>
        <div className={style.headingDiv}>

             <p>All Dashboard</p>
             <span>
                 {
                   showInput&&  <input className={style.inputBox}
                   placeholder= "Serach By Id"
                   />
                 }
                <img src={searchIcon} onClick = {handleInputeShow} alt="img"></img> 
                <img src={kpifilterIcon} alt="img"></img> 
                <img src={filterIcon} alt="img"></img> 
             </span>
    
        </div>
        <div>
           <Table data ={data} column ={column}/>
        </div>

    </div>
  )
}

export default CardTable