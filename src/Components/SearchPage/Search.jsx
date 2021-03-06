import React from 'react'
import SearchForm from "./Forms/SearchForm";
import s from "../../Style/style.module.css"
import SearchInfo from "./SearchInfo";

const Search = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__header}>
                {/*Форма поиска*/}
                <SearchForm
                    updateDate={props.updateDate}
                    updateSearchedDate={props.updateSearchedDate}
                    LaunchesDates={props.LaunchesDates}
                />
                <div>
                    {/*Таблица отображения отсортированных данных*/}
                    <SearchInfo
                        theme={props.theme}
                        SortedLaunches={props.SortedLaunches}
                    />
                </div>
            </div>
        </div>
    )
}


export default Search
