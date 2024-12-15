import { Request,Response } from "express";
import { CostsService } from "../service/CostsService";

export class CostController{
    private constService:CostsService

    constructor(){
        this.constService = new CostsService()
    }

    public calcTotalCosts = (req:Request,res:Response):void =>{
        try{
            const FinancialData = req.body

            
            if(!FinancialData || !Array.isArray(FinancialData.categories)){
                res.status(400).json({
                    success:false,
                    message: "invalid data or empty inputs"
                })
                return
            }
            const totalCost = this.constService.CalcCosts(FinancialData)
            const TotalPerCategory = this.constService.PerCategory(FinancialData)
            res.status(200).json({
                success:true,
                message:"data sucessefully processed",
                totalCost,
                TotalPerCategory:Object.fromEntries(TotalPerCategory)
            })
            
        }catch(err){
            res.status(500).json({
                success:false,
                message:err
            })
            return 
        }
    }
}