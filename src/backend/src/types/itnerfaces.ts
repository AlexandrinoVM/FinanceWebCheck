export interface item{
    name:string
    price:number
}

export interface Category{
    name:string
    items:item[]
}

export interface FinancialData{
    totalAmount:number
    categories: Category[]
}
