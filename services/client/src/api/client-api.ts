import { Express, NextFunction, Request, Response } from "express"
import ClientService from "../service/client-service";

const ClientAPI = (app:Express) => {

    const clientService = new ClientService();

    app.get('/list', async (req:Request, res:Response, next:NextFunction) => {
        const result = await clientService.GetClientList();
        return res.status(200).json({result});
    });

    app.get('/ping-product', async (req:Request, res:Response, next:NextFunction) => {
        await clientService.PingProductService();
        return res.status(200).json({msg: 'Pinged client service'});
    });

    app.get('/ping-user', async (req:Request, res:Response, next:NextFunction) => {
        await clientService.PingUserService();
        return res.status(200).json({msg: 'Pinged user service'});
    });

}

export default ClientAPI;