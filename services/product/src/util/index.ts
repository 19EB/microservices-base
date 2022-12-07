import axios from "axios"
import config from "../config"

export const PublishUserEvent = async (payload:{event:string, data:any}) => {
        axios.post(`${config.USER_SERVICE_URL}/events`, {payload}).catch(err => {
            console.log('Could not publish user event: ');
            console.log(err.toString());
        });
}

export const PublishClientEvent = async (payload:{event:string, data:any}) => {
    axios.post(`${config.CLIENT_SERVICE_URL}/events`, {payload}).catch(err => {
        console.log('Could not publish client event: ');
        console.log(err.toString());
    });
}