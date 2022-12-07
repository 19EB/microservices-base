import express, { Express, Request, Response, NextFunction } from "express";
import cors from 'cors';
import UserAPI from "./api/user-api";
import Events from "./api/events";

const ExpressLogic = async (app:Express) => {

    app.use(express.json({ limit: '1mb' }));
    app.use(cors());


    Events(app);

    UserAPI(app);

    app.use('/', (req:Request, res:Response, next:NextFunction)=>{
        return res.status(200).json({msg: 'User service response'});
    });
    
}

export default ExpressLogic;