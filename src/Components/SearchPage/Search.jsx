import React from 'react'
import SearchForm from "./Forms/SearchForm";
import s from "../../Style/style.module.css"
import SearchInfo from "./SearchInfo";
import {NavLink} from "react-router-dom";

const Search = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__header}>
                <SearchForm
                    updateDate={props.updateDate}
                    updateSearchedDate={props.updateSearchedDate}
                    LaunchesDates={props.LaunchesDates}
                />
                <NavLink to={'/'}
                >
                    back
                </NavLink>

                <div>
                    <SearchInfo
                        SortedLaunches={props.SortedLaunches}
                    />
                </div>
            </div>
        </div>
    )
}


export default Search
