import React from 'react'
import MainInfo from "./MainInfo";
import s from "../../Style/style.module.css"

const Main = (props) => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.container__header}>
                    <div>
                        <MainInfo
                            theme={props.theme}
                            toggleTheme={props.toggleTheme}
                            FilteredLaunches={props.FilteredLaunches}
                            CurrentPage={props.CurrentPage}
                            LaunchesPerPage={props.LaunchesPerPage}
                            TotalLaunches={props.TotalLaunches}
                            Paginate={props.Paginate}
                            prevPage={props.prevPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main
