import axios from "axios"
import config from "../config"

export const PublishUserEvent = async (payload:{event:string, data:any}) => {
        axios.post(`${config.USER_SERVICE_URL}/events`, {payload}).catch(err => {
            console.log('Could not publish user event: ');
            console.log(err.toString());
        });
}

export const PublishProductEvent = async (payload:{event:string, data:any}) => {
    axios.post(`${config.PRODUCT_SERVICE_URL}/events`, {payload}).catch(err => {
        console.log('Could not publish product event: ');
        console.log(err.toString());
    });
}