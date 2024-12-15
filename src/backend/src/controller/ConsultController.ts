
import { ConsultService } from "../service/ConsultService";
import { Request,Response } from "express";

export class ConsultController{
    private consultService:ConsultService

    constructor(){
        this.consultService = new ConsultService
    }
    public getFinanceData = (req:Request,res:Response)=>{
        try{
            const data = this.consultService.getData()
            res.status(200).json({
                message:'Data found',
                FinancialData:data
            })
            

        }catch(err){
            res.status(400).json({
                message:JSON.stringify(err)
            })
            return
        }
    }
}


