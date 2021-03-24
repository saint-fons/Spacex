import {createSelector} from "reselect";


export const getLaunchesSelector = (state) => {
    return (state)
}

export const getNamesSelector = (state) => {
    let names = state.LaunchesPage.launches.map(
        l => (
            l.rocket.rocket_name
        )
    )
    debugger
    return names
}



export const getLaunchesSC = createSelector(
    getLaunchesSelector,
    (state) => {
        return state.LaunchesPage
    }
)

