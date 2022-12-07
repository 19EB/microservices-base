import { Express, NextFunction, Request, Response } from "express"
import UserService from "../service/user-service"

const Events = (app:Express) => {
    const service = new UserService();

    app.use('/events', async (req:Request, res:Response, next:NextFunction) => {
        console.log('Event received');
        const { payload } = req.body;
        service.SubcribeEvents(payload);
        return res.status(200).json(payload);
    });

}

export default Events;