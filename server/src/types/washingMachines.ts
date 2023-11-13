export default interface WashingMachine {
    name: string;
    brand: string;
    model: string;
    color: string;
    price: number;
    category: string;
    energyRating: string;
    dimensions: {
        height: number;
        width: number;
        depth: number;
        weight: number;
    };
    quantity: number;
    description: string;
    image: string;
    addresses: string[];
}
