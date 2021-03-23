import {locationInfoAPI} from "../API/API";



const SET_ADDRESS = 'SET-ADDRESS';


let initialState = {

}


const rocketReducer = (
    state = initialState,
    action) => {
    let stateCopy

    switch (action.type) {

        default:
            return state
    }
}


export const setAddress = (ip, location, as, isp, proxy) =>
    ({type: SET_ADDRESS, data: {ip, location, as, isp, proxy}})


export const getData = () => {
    return (dispatch) => {
        locationInfoAPI.getAddress()
            .then(data => {
                let {ip, location, as, isp, proxy} = data.data
                dispatch(setAddress(ip, location, as, isp, proxy))
            })
    }
}

export default rocketReducer
