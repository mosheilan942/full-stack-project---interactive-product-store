export type CellPhoneType = {
    _id: string;
    name: string;
    manufacturer: string;
    model: string;
    price: number;
    rating: number;
    color: string;
    quantity: number;
    description: string;
    image: string;
    addresses: string[];
    categoryDetails: {
        height: number;
        length: number;
        width: number;
        weight: number;
        screenSize: number;
    }
    categoryType: string;
    date: string;
    __v: number;
}


export type RefrigeratorType = {
    _id: string;
    name: string;
    manufacturer: string;
    model: string;
    price: number;
    rating: number;
    color: string;
    quantity: number;
    description: string;
    image: string;
    addresses: string[];
    categoryDetails: {
        height: number;
        width: number;
        depth: number;
        weight: number;
        freezerLocation: string;
    }
    categoryType: string;
    date: string;
    __v: number;
}

export type WashingMachineType = {
    _id: string;
    name: string;
    manufacturer: string;
    model: string;
    price: number;
    rating: number;
    color: string;
    quantity: number;
    description: string;
    image: string;
    addresses: string[];
    categoryDetails: {
       height: number;
        width: number;
        depth: number;
        weight: number;
        energyRating: string;
    }
    categoryType: string;
    date: string;
    __v: number;

}

export type ProductType = CellPhoneType | RefrigeratorType | WashingMachineType;


