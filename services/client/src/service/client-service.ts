import ClientRepository from '../database/repository/client-repository';
import { PublishProductEvent, PublishUserEvent } from '../util';

class ClientService {

    repository:ClientRepository;

    constructor() {
        this.repository = new ClientRepository();
    }

    GetClientList = async () => {
        const productList = await this.repository.GetClients();
        return productList;
    }
    
    ReceivePing = async (data:any) => {
        console.log('Your service just got pinged:');
        console.log(data);
    }

    PingProductService = async () => {
        const payload = {
            event: 'PING',
            data: { msg: 'Hello from client service'}
        }
        PublishProductEvent(payload);
    }

    PingUserService = async () => {
        const payload = {
            event: 'PING',
            data: { msg: 'Hello from client service'}
        }
        PublishUserEvent(payload);
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

export default ClientService;