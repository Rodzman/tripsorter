export interface Deals {
    transport: string
    departure: string
    arrival: string
    duration: Duration
    cost: number
    discount: number
    reference: string
}

export interface Duration {
    h: number
    m: number
}

export interface SearchQuery {
    selFrom: string
    selTo: string
    sort:string
}