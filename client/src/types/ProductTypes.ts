export type  ProductType = {
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
    dimensions: {
        height: number;
        length: number;
        width: number;
        weight: number;
    }
    categoryType: string;
    date: string;
    __v: number;
}


export type CategoryType = {
    _id: string;
    name: string;
    rating: number;
    product: ProductType[];
    image: string;
    __v: number;
  }



