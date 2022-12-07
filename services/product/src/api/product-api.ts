import { Express, NextFunction, Request, Response } from "express"
import ProductService from "../service/product-service";

const ProductAPI = (app:Express) => {

    const productService = new ProductService();

    app.get('/list', async (req:Request, res:Response, next:NextFunction) => {
        const result = await productService.GetProductList();
        return res.status(200).json({result});
    });

    app.get('/ping-client', async (req:Request, res:Response, next:NextFunction) => {
        await productService.PingClientService();
        return res.status(200).json({msg: 'Pinged client service'});
    });

    app.get('/ping-user', async (req:Request, res:Response, next:NextFunction) => {
        await productService.PingUserService();
        return res.status(200).json({msg: 'Pinged user service'});
    });

}

export default ProductAPI;