import express from 'express';
import dbConnection from './database/connection';
import ExpressLogic from './express-logic';
import config from './config';

const Start = async() => {
    console.log(`Running server in mode: ${process.env.NODE_ENV}`);
    const app = express();
    
    await dbConnection();
    
    await ExpressLogic(app);
    
    app.listen(config.PORT, ()=>{
        console.log(`User service running at port ${config.PORT}`);
    }).on('error', (err:Error) => {
        console.log(err);
        process.exit();
    });
}

Start();
