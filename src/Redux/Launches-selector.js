import {createSelector} from "reselect";


export const getLaunchesSelector = (state) => {
    return (state)
}
/*select rockets names*/
export const getNamesSelector = (state) => {
    let names = state.LaunchesPage.launches.map(
        l => (
            l.rocket.rocket_name
        )
    )
    return names
}

/*select some description*/
export const getDetailsSelector = (state) => {
    let details = state.LaunchesPage.launches.map(
        l => (
            l.details
        )
    )
    return details
}

/*success or not*/
export const getSuccessSelector = (state) => {
    let success = state.LaunchesPage.launches.map(
        l => (
            l.launch_success
        )
    )
    return success
}

/*select date*/
export const getDateSelector = (state) => {
    let date = state.LaunchesPage.launches.map(
        l => (
            l.launch_date_local
        )
    )
    return date
}

/*select rocket patch*/
export const getPatchSelector = (state) => {
    let date = state.LaunchesPage.launches.map(
        l => (
            l.links.mission_patch
        )
    )
    return date
}





export const getLaunchesSC = createSelector(
    getLaunchesSelector,
    (state) => {
        return state.LaunchesPage
    }
)

