export default interface CellPhone {
    _id: string;
    name: string;
    manufacturer: string;
    model: string;
    price: number
    category: string
    color: string;
    isKosher: boolean;
    screenSize: number;
    dimensions: {
        height: number;
        length: number;
        width: number;
        weight: number;
    };
    quantity: number;
    description: string;
    image: string; // You can use the 'string' type for the image URL
    addresses: string[];
}