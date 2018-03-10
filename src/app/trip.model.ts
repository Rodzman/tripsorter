// Interface for the deals results
export interface Deals {
    transport: string
    departure: string
    arrival: string
    duration: Duration
    cost: number
    discount: number
    reference: string
}

// Interface for the duration type
export interface Duration {
    h: number
    m: number
}

// Interface for the query 
export interface SearchQuery {
    selFrom: string
    selTo: string
    sort:string
}