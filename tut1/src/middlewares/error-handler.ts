import { Request,Response,NextFunction } from "express";
import { CustomError } from "../errors/Errors";

export const errorHandler=(
    err:CustomError,
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    console.log(err)
    res.status(err.statusCode).send({errors:err.serialize()})
}