import React from 'react'
import MainInfo from "./MainInfo";
import s from "../../Style/style.module.css"
import light from "../../Style/light.jpg"
import {NavLink} from "react-router-dom";

const Main = (props) => {
    return (
        <div>
            <div className={s.container}>

                <div className={s.container__header}>

                    <div>
                        <div className={s.container__header_nav}>
                            <NavLink to={'/search/'}
                            >
                                Search 🔎
                            </NavLink>

                            <button
                                onClick={props.toggleTheme}>
                                {props.theme === 'light' ?
                                    <div>light</div>
                                    :
                                    <div>dark</div>
                                }
                            </button>

                        </div>
                        <MainInfo
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


export default Main
