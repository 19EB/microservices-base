import { Express, NextFunction, Request, Response } from "express"
import UserService from "../service/user-service";

const UserAPI = (app:Express) => {

    const userService = new UserService();

    app.get('/list', async (req:Request, res:Response, next:NextFunction) => {
        const result = await userService.GetUserList();
        return res.status(200).json({result});
    });

    app.get('/ping-client', async (req:Request, res:Response, next:NextFunction) => {
        await userService.PingClientService();
        return res.status(200).json({msg: 'Pinged client service'});
    });

    app.get('/ping-product', async (req:Request, res:Response, next:NextFunction) => {
        await userService.PingProductService();
        return res.status(200).json({msg: 'Pinged product service'});
    });

}

export default UserAPI;