import React from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from '../Style/theme';
import {GlobalStyles} from '../Style/global';
import {useState} from 'react';
import {Route} from "react-router-dom";
import Main from "./MainPage/Main";
import Search from "./SearchPage/Search";
import DatePicked from "./DatePickedPage/DatePicked";


const ContainerStyle = (props) => {

    /*Светлая/темная тема*/
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }


    return (
        <div>
            <ThemeProvider
                theme={theme === 'light' ?
                    lightTheme :
                    darkTheme}>
                <>
                    <GlobalStyles/>
                    <Route exact path='/' render={() =>
                        /*Стартовая страница*/
                        <Main
                            toggleTheme={toggleTheme}
                            theme={theme}
                            FilteredLaunches={props.FilteredLaunches}
                            Paginate={props.Paginate}
                            LaunchesPerPage={props.LaunchesPerPage}
                            TotalLaunches={props.TotalLaunches}
                            updateDate={props.updateDate}
                            SortedLaunches={props.SortedLaunches}
                            prevPage={props.prevPage}
                            CurrentPage={props.CurrentPage}
                        />}
                    />

                    <Route exact path='/search/' render={() =>
                        /*Страница поиска*/
                        <Search
                            theme={theme}
                            updateDate={props.updateDate}
                            updateSearchedDate={props.updateSearchedDate}
                            SortedLaunches={props.SortedLaunches}
                            LaunchesDates={props.LaunchesDates}
                        />}
                    />

                    <Route exact path="/DatePicked/" render={() =>
                        /*Страница с выбранной датой*/
                        <DatePicked
                            theme={theme}
                            DatePicked={props.DatePicked}
                        />}
                    />


                </>
            </ThemeProvider>
        </div>
    );
};

export default ContainerStyle;
