import React from 'react'
import style from "./Table.module.scss"

interface props{
    data : any
    column : any
}

function Table(props : props) {
  return (
    <div className={style.tableDiv}>
        <table>
     
            <tr>
                {
                  props.column?.map((data :any) => {
                      console.log("roe" ,data?.displayName )
                      return (
                          <th   className ={style.headerRow}>
                              {data?.displayName}
                          </th>
                      )
                  })  
                }
            </tr>

            <tbody>
             {
                 props?.data?.map((tableData :any , index :number) => {
               return  <tr>
                     {
                        props.column?.map((columnData :any ) => {
                            console.log(columnData , tableData)
                            return (
                                <td>
                                  {
                                      columnData?.render(tableData , columnData?.key, index)
                                  }
                                </td>
                            )
                        }) 
                     }
                 </tr>
                 })
             }
            </tbody>
        </table>
    </div>
  )
}

export default Table