import axios from 'axios';


export const locationInfoAPI = {
    getAddress() {
        return axios.get(`https://api.spacexdata.com/v3/launches/latest?pretty=true`)
            .then(response =>{
                return response
            })
    }
}
