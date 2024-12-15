import { FinancialData } from "../types/itnerfaces"


export class ConsultService{
    getData():FinancialData | undefined{
        const data = localStorage.getItem("costs")
        if(data){
            return JSON.parse(data)
        }else{
            return undefined 
        }
    }
}