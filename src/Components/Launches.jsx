import React from 'react'
import "./../Style/style.css"
import MetaDataInfo from "./MetaDataInfo";

const Launches = (props) => {
    return (
        <div className={"container"}>
            <div className={"container__header"}>
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
