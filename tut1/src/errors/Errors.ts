import { ValidationError } from "express-validator";
import { MongooseError } from "mongoose";

export abstract class CustomError extends Error{
    constructor(public message:string){
        super(message)
    }
    abstract statusCode: number
    abstract serialize(): [{message:string , fields?:string}]
}


export class InitializationError extends CustomError{
    public statusCode=500;
    constructor (public message:string){
        super(message);
    }
    public serialize(): [{message:string}] {
        return [
            {
                message:this.message
            }
        ]
    }
}

export class DBError extends CustomError{
    public statusCode=500;
    constructor (private error:MongooseError){
        super(error.message);
    }
    public serialize(): [{message:string}] {
        return [
            {
                message:this.error.message
            }
        ]
    }
}