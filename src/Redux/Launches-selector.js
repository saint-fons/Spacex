import {createSelector} from "reselect";


export const getLaunchesSelector = (state) => {
    return (state)
}

// numbers of all launches
export const getTotalPostsLengthSelector = (state) => {
    let totalPosts = state.LaunchesPage.launches.length
    return totalPosts
}


export const getLaunchesSS = createSelector(
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
)



/*

export const getNamesSelector = (state) => {
    let names = state.LaunchesPage.launches.map(
        l => (
            l.rocket.rocket_name
        )
    )
    return names
}

export const getDetailsSelector = (state) => {
    let details = state.LaunchesPage.launches.map(
        l => (
            l.details
        )
    )
    return details
}

export const getSuccessSelector = (state) => {
    let success = state.LaunchesPage.launches.map(
        l => (
            l.launch_success
        )
    )
    return success
}

export const getDateSelector = (state) => {
    let date = state.LaunchesPage.launches.map(
        l => (
            l.launch_date_local
        )
    )
    return date
}

export const getPatchSelector = (state) => {
    let date = state.LaunchesPage.launches.map(
        l => (
            l.links.mission_patch
        )
    )
    return date
}

*/
