import ProductRepository from '../database/repository/product-repository';
import { PublishClientEvent, PublishUserEvent } from '../util';

class ProductService {

    repository:ProductRepository;

    constructor() {
        this.repository = new ProductRepository();
    }

    GetProductList = async () => {
        const productList = await this.repository.GetProducts();
        return productList;
    }
    
    ReceivePing = async (data:any) => {
        console.log('Your service just got pinged:');
        console.log(data);
    }

    PingClientService = async () => {
        const payload = {
            event: 'PING',
            data: { msg: 'Hello from product service'}
        }
        PublishClientEvent(payload);
    }

    PingUserService = async () => {
        const payload = {
            event: 'PING',
            data: { msg: 'Hello from product service'}
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

export default ProductService;