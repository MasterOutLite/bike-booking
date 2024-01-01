export type BicycleType = {
    _id: string
    id: string;
    name: string;
    type: string;
    status: BicycleStatusType;
    color: string;
    wheelSize: number;
    price: number;
    description: string
}

export type BicycleStatusType = {
    _id: string;
    name: string;
}

export type StatisticsType = {
    count: number,
    countAvailable: number,
    countUnavailable: number,
    avgPrice: number
}


export interface IBicycleForm {
    id: string;
    name: string;
    type: string;
    color: string;
    wheelSize: number;
    price: number;
    description: string
}

