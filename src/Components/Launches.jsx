import React from 'react'
import MetaDataInfo from "./MetaDataInfo";
import s from "./../Style/style.module.css"
import light from "./../Style/light.jpg"

const Launches = (props) => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.container__header}>
                    <div>
                        <MetaDataInfo
                            theme={props.theme}
                            FilteredLaunches={props.FilteredLaunches}
                            CurrentPage={props.CurrentPage}
                            LaunchesPerPage={props.LaunchesPerPage}
                            TotalLaunches={props.TotalLaunches}
                            Paginate={props.Paginate}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Launches
