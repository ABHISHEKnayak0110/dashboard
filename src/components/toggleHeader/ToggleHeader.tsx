import React, { useState } from 'react'
import style from "./ToggleHeader.module.scss"

interface props {
    extraStyleMainContainer?: string
    extraStyleTab?: string
}

function ToggleHeader(props: props) {
    const [selectedOption, setSelectedOption] = useState<any>( {
        displayName: "Engineer Report",
        key: ""
    })
    const optionList =
        [
            {
                displayName: "Dashboards",
                key: ""
            },
            {
                displayName: "Connected Assets",
                key: ""
            },
            {
                displayName: "Engineer Report",
                key: ""
            }

        ]

    const handleTabClick = (tab: any) => {
        setSelectedOption(tab)
    }

    return (
        <div className={`${style.toggleheaderWrapper} ${props.extraStyleMainContainer}`}>
            {
                optionList?.map((option: any, index: number) => {
                    return (
                        <div key={index}
                            className={`${style.tabDiv}
                            ${props.extraStyleTab} ${selectedOption?.displayName == option?.displayName ? style.tabDiv_selected : ""}`}
                            onClick={() => { handleTabClick(option) }}
                        >
                            {option?.displayName}

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToggleHeader