import React from 'react'
import "./../Style/style.css"
import MetaDataInfo from "./MetaDataInfo";
import {NavLink} from "react-router-dom";

const Launches = (props) => {
    return (
        <div className={"container"}>
            <div className={"container__header"}>

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
