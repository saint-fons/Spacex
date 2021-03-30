import React from 'react'
import s from "../../Style/style.module.css"
import DatePickedInfo from "./DatePickedInfo";
import {NavLink} from "react-router-dom";

const DatePicked = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__header}>
                <NavLink to={'/'}
                >
                    back
                </NavLink>
                <div>
                    <DatePickedInfo
                        DatePicked={props.DatePicked}
                    />
                </div>
            </div>
        </div>
    )
}


export default DatePicked
