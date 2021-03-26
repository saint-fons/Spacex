import {locationInfoAPI} from "../API/API";



const SET_DATA = 'SET-DATA';
const DATE_UPDATE = 'DATE-UPDATE';


let initialState = {
    launches: [{
        "flight_number": null,
        "mission_name": "",
        "mission_id": [],
        "upcoming": null,
        "launch_year": "",
        "launch_date_unix": null,
        "launch_date_utc": "",
        "launch_date_local": "",
        "is_tentative": null,
        "tentative_max_precision": "",
        "tbd": null,
        "launch_window": null,
        "rocket": {
            "rocket_id": "",
            "rocket_name": "",
            "rocket_type": "",
            "first_stage": {
                "cores": [
                    {
                        "core_serial": "",
                        "flight": null,
                        "block": null,
                        "gridfins": null,
                        "legs": null,
                        "reused": null,
                        "land_success": null,
                        "landing_intent": null,
                        "landing_type": null,
                        "landing_vehicle": null
                    }
                ]
            },
            "second_stage": {
                "block": null,
                "payloads": [
                    {
                        "payload_id": "",
                        "norad_id": [],
                        "reused": null,
                        "customers": [
                            ""
                        ],
                        "nationality": "",
                        "manufacturer": "",
                        "payload_type": "",
                        "payload_mass_kg": null,
                        "payload_mass_lbs": null,
                        "orbit": "",
                        "orbit_params": {
                            "reference_system": "",
                            "regime": "",
                            "longitude": null,
                            "semi_major_axis_km": null,
                            "eccentricity": null,
                            "periapsis_km": null,
                            "apoapsis_km": null,
                            "inclination_deg": null,
                            "period_min": null,
                            "lifespan_years": null,
                            "epoch": null,
                            "mean_motion": null,
                            "raan": null,
                            "arg_of_pericenter": null,
                            "mean_anomaly": null
                        }
                    }
                ]
            },
            "fairings": {
                "reused": null,
                "recovery_attempt": null,
                "recovered": null,
                "ship": null
            }
        },
        "ships": [],
        "telemetry": {
            "flight_club": null
        },
        "launch_site": {
            "site_id": "",
            "site_name": "",
            "site_name_long": ""
        },
        "launch_success": null,
        "launch_failure_details": {
            "time": null,
            "altitude": null,
            "reason": ""
        },
        "links": {
            "mission_patch": "",
            "mission_patch_small": "",
            "reddit_campaign": null,
            "reddit_launch": null,
            "reddit_recovery": null,
            "reddit_media": null,
            "presskit": null,
            "article_link": "",
            "wikipedia": "",
            "video_link": "",
            "youtube_id": "0a_00nJ_Y88",
            "flickr_images": []
        },
        "details": "",
        "static_fire_date_utc": "",
        "static_fire_date_unix": null,
        "timeline": {
            "webcast_liftoff": null
        },
        "crew": null
    }],
    Date: ""
}


const rocketReducer = (
    state = initialState,
    action) => {
    let stateCopy

    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                launches: action.data.data
            }
        }
        case DATE_UPDATE: {
            stateCopy = {...state}
            stateCopy.Date = action.date
            return stateCopy
        }
        default:
            return state
    }
}


export const setAddress = (data) =>
    ({type: SET_DATA, data})

export const updateDate = (date) =>
    ({type: DATE_UPDATE, date})



export const getData = () => {
    return (dispatch) => {
        locationInfoAPI.getAddress()
            .then(data => {
                dispatch(setAddress(data))
            })
    }
}

export default rocketReducer
