interface item{
    name:string
    price:number
}

interface Category{
    name:string
    items:item[]
}

interface FinancialData{
    totalAmount:number
    categories: Category[]
}



export class CostsService{
    CalcCosts(financialData:FinancialData):number{
        const total = financialData.categories.reduce((acc,category)=>{
            const categoryTotal = category.items.reduce((itemacc,item)=>
               itemacc + item.price,0)
            return Number(acc) + categoryTotal
            
        },0 )
        
        return total
    }
    PerCategory(financialData:FinancialData):Map<String,number>{
        const TotalPerCategory = new Map<String,number>()
        financialData.categories.forEach((category)=>{
                const totalValue = category.items.reduce((acc,item)=>
                  acc+item.price
                ,0)
                return TotalPerCategory.set(category.name,totalValue)
        })
        return TotalPerCategory

    }

}