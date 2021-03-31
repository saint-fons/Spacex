import React from 'react'
import s from "../../Style/style.module.css"
import DatePickedInfo from "./DatePickedInfo";
import {NavLink} from "react-router-dom";
import search from "../../Style/IMG/search.png"

const DatePicked = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__header}>
                {/*Возврат на страницу поиска*/}
                <NavLink to={'/search/'}
                >
                    <img
                        className={s.container__header_nav__img__center}
                        src={search}
                        alt={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/magnifying-glass-tilted-right_1f50e.png"}
                    />
                </NavLink>
                <div>
                    {/*Таблица для выбранной даты*/}
                    <DatePickedInfo
                        theme={props.theme}
                        DatePicked={props.DatePicked}
                    />
                </div>
            </div>
        </div>
    )
}


export default DatePicked
