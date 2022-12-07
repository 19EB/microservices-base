import UserRepository from '../database/repository/user-repository';
import { PublishClientEvent, PublishProductEvent } from '../util';

class UserService {

    repository:UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    GetUserList = async () => {
        const userList = await this.repository.GetUsers();
        return userList;
    }
    
    ReceivePing = async (data:any) => {
        console.log('Your service just got pinged:');
        console.log(data);
    }

    PingClientService = async () => {
        const payload = {
            event: 'PING',
            data: { msg: 'Hello from user service'}
        }
        PublishClientEvent(payload);
    }

    PingProductService = async () => {
        const payload = {
            event: 'PING',
            data: { msg: 'Hello from user service'}
        }
        PublishProductEvent(payload);
    }

    SubcribeEvents = async (payload:{event:string, data:any}) => {
        if(!payload || !payload.event || !payload.data) {
            console.log('Could not subscribe an event due to invalid payload');
            return;
        }
        const { event, data }  = payload;
        
        //Do some event related things
        switch(event) {
            case 'PING':
                this.ReceivePing(data);
                break;
            default:
                break;
        }
    }

}

export default UserService;