export type ExemplePhone = {
    rating: number;
    _id: string;
    name: string;
    manufacturer: string;
    model: string;
    price: number;
    Categorie: string;
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
    };
    categoryType: string;
    date: string;
    __v: number;
}


export type ExempleRefrigerator = {
    rating: number;
    _id: string;
    name: string;
    mmodel: string;
    price: number;
    Categorie: string;
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
    };
    categoryType: string;
    date: string;
    __v: number;
}


export type ExempleWashingMachine = {
    rating: number;
    _id: string;
    name: string;
    manufacturer: string;
    mode: string;
    price: number;
    Categorie: string;
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
    };
    categoryType: string;
    date: string;
    __v: number;
}