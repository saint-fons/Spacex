import React from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './theme';
import {GlobalStyles} from './global';
import {useState} from 'react';
import {Route} from "react-router-dom";
import Launches from "./Launches";
import DatePickerLaunches from "./DatePickerLaunches";


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
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <>
                    <GlobalStyles/>
                    <Route exact path='/' render={() =>
                        <Launches
                            toggleTheme={toggleTheme}
                            theme={theme}
                            FilteredLaunches={props.FilteredLaunches}
                            Paginate={props.Paginate}
                            LaunchesPerPage={props.LaunchesPerPage}
                            TotalLaunches={props.TotalLaunches}
                            updateDate={props.updateDate}
                            SortedLaunches={props.SortedLaunches}
                        />}
                    />

                    <Route exact path='/datepicker/datepicker/' render={() =>
                        <DatePickerLaunches
                            updateDate={props.updateDate}
                            SortedLaunches={props.SortedLaunches}
                        />}
                    />
                </>
            </ThemeProvider>
        </div>
    );
};

export default ContainerStyle;
