import {createSelector} from "reselect";


export const getLaunchesSelector = (state) => {
    return (state)
}

// numbers of all launches
export const getTotalPostsLengthSelector = (state) => {
    return state.LaunchesPage.launches.length
}


export const getLaunchesSS = createSelector(
    getLaunchesSelector,
    (state) => {
        const indexOfLastLaunch = state.LaunchesPage.CurrentPage * state.LaunchesPage.LaunchesPerPage
        const indexOfFirstLaunch = indexOfLastLaunch - state.LaunchesPage.LaunchesPerPage
        return state.LaunchesPage.launches.slice(indexOfFirstLaunch, indexOfLastLaunch)
    }
)



/*export const getLaunchesSS = createSelector(
    getLaunchesSelector,
    (state) => {

        let FilteredLaunches = {
            SortedLaunches: null,
            TotalLaunches: null
        }

        const indexOfLastLaunch = state.LaunchesPage.CurrentPage * state.LaunchesPage.LaunchesPerPage
        const indexOfFirstLaunch = indexOfLastLaunch - state.LaunchesPage.LaunchesPerPage
        const currentLaunch = state.LaunchesPage.launches.slice(indexOfFirstLaunch, indexOfLastLaunch)
        let sortLaunches = currentLaunch.filter(
            f => f.launch_date_local.includes(state.LaunchesPage.Date)
        )
        FilteredLaunches.SortedLaunches = sortLaunches
        FilteredLaunches.TotalLaunches = sortLaunches.length

        return sortLaunches
    }
)*/
