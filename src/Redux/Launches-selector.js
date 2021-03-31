import {createSelector} from "reselect";


export const getLaunchesSelector = (state) => {
    return (state)
}

// numbers of all launches
export const getTotalPostsLengthSelector = (state) => {
    return state.LaunchesPage.launches.length
}



//определение индексов для пагинации
export const getLaunchesSS = createSelector(
    getLaunchesSelector,
    (state) => {
        const indexOfLastLaunch = state.LaunchesPage.CurrentPage * state.LaunchesPage.LaunchesPerPage
        const indexOfFirstLaunch = indexOfLastLaunch - state.LaunchesPage.LaunchesPerPage
        return state.LaunchesPage.launches.slice(indexOfFirstLaunch, indexOfLastLaunch)
    }
)



//выборка дат запуска по UTC
export const getLaunchesDatesSS = createSelector(
    getLaunchesSelector,
    (state) => {
         let newDate = state.LaunchesPage.launches.map(d =>
            d.launch_date_utc
        )
        return newDate
    }
)



//Выборка выбранной пользователем даты
export const getDatePickedSS = createSelector(
    getLaunchesSelector,
    (state) => {
        let DatePicked = state.LaunchesPage.launches.filter(
            f => f.launch_date_utc.split("").splice(0, 19).join("").includes(state.LaunchesPage.SearchedDate)
        )
        return DatePicked
    }
)




//Выборка по выбранному пользователем году
export const getSortedLaunchesSS = createSelector(
    getLaunchesSelector,
    (state) => {
        let SortedLaunches = ""
        if (state.LaunchesPage.Date === "") {
            SortedLaunches = state.LaunchesPage.launches
            return SortedLaunches
        }
        if (state.LaunchesPage.Date !== "") {
            SortedLaunches = state.LaunchesPage.launches.filter(
                f => f.launch_year.includes(state.LaunchesPage.Date)
            )
            return SortedLaunches
        }


    }
)
