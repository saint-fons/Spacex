import React from 'react'
import NewForm from "./Forms/NewForm";
import s from "./../Style/style.module.css"
import DatePickedInfo from "./DatePickedInfo";
import {NavLink} from "react-router-dom";

const DatePickerLaunches = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__header}>
                <NewForm
                    updateDate={props.updateDate}
                />
                <NavLink to={'/'}
                >
                    back
                </NavLink>
                <div>
                    <DatePickedInfo
                        SortedLaunches={props.SortedLaunches}
                    />
                </div>
            </div>
        </div>
    )
}


export default DatePickerLaunches
