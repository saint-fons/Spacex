import React from 'react'
import MetaDataInfo from "./MetaDataInfo";
import {NavLink} from "react-router-dom";
import s from "./../Style/style.module.css"

const Launches = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__header}>
                <div>
                    <NavLink to={'/datepicker/datepicker'}
                    >
                        datepicker
                    </NavLink>

                </div>

                <div>
                    <MetaDataInfo
                        FilteredLaunches={props.FilteredLaunches}
                        CurrentPage={props.CurrentPage}
                        LaunchesPerPage={props.LaunchesPerPage}
                        TotalLaunches={props.TotalLaunches}
                        Paginate={props.Paginate}
                    />
                </div>
            </div>
        </div>
    )
}


export default Launches
