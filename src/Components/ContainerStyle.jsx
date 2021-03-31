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
                        <Search
                            updateDate={props.updateDate}
                            updateSearchedDate={props.updateSearchedDate}
                            SortedLaunches={props.SortedLaunches}
                            LaunchesDates={props.LaunchesDates}
                        />}
                    />

                    <Route exact path="/DatePicked/" render={() =>
                        <DatePicked
                            DatePicked={props.DatePicked}
                        />}
                    />


                </>
            </ThemeProvider>
        </div>
    );
};

export default ContainerStyle;
