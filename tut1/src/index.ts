import express, { Request, Response} from "express"
import mongoose from "mongoose"
import { errorHandler } from "./middlewares/error-handler";
import { DBError, InitializationError } from "./errors/Errors";

const app=express();
app.set('trust-proxy',true);

app.get("/",async(req:Request,res:Response)=>{
    throw new InitializationError("cannot serve this route")
})
app.use(errorHandler)
function startup(){
    const throw_error=false;
    if(throw_error){
        throw new InitializationError("Error on startup")
    }
}

app.listen(3000,()=>{
    startup();
    console.log("Server listening on port 3000");
})