export default interface WashingMachine {
  _id: string;
  name: string;
  brand: string;
  model: string;
  color: string;
  price: number;
  category: string
  energyRating: string; // You can use a specific type or string for energy ratings
  dimensions: {
    height: number;
    width: number;
    depth: number;
    weight: number;
  };
  quantity: number;
  description: string;
  image: string; // You can use the 'string' type for the image URL
  addresses: string[];
}