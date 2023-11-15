import { ExemplePhone, ExempleRefrigerator, ExempleWashingMachine } from "./typedb";

export const exemplePhone: ExemplePhone = {
    rating: 0,
    _id: "6553623fb8a3c4c0128c32fa",
    name: "iPhone 13",
    manufacturer: "Apple",
    model: "13",
    price: 1000,
    Categorie: "6553623fb8a3c4c0128c32f3",
    color: "Midnight",
    quantity: 50,
    description: "The latest iPhone with advanced camera and A15 Bionic chip.",
    image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
    addresses: ["123 Main St, Cityville", "456 Oak St, Townsville"],
    categoryDetails: {
        height: 146.7,
        length: 71.5,
        width: 7.7,
        weight: 173,
        screenSize: 6.1
    },
    categoryType: "cellPhone",
    date: "2023-11-14T12:04:15.225Z",
    __v: 0
}

export const exempleRefrigerator: ExempleRefrigerator = {

    rating: 0,
    _id: "6553623fb8a3c4c0128c3304",
    name: "Samsung French Door Refrigerator",
    mmodel: "RF567",
    price: 1500,
    Categorie: "6553623fb8a3c4c0128c32f6",
    color: "Stainless Steel",
    quantity: 10,
    description: "High-tech French door refrigerator with spacious storage.",
    image: "https://example.com/samsung-refrigerator.jpg",
    addresses: ["123 Main St, Cityville", "456 Oak St, Townsville"],
    categoryDetails: {
        height: 70,
        width: 36,
        depth: 33,
        weight: 250,
        freezerLocation: "Bottom"
    },
    categoryType: "refrigerator",
    date: "2023-11-14T12:04:15.232Z",
    __v: 0
}


export const exempleWashingMachine: ExempleWashingMachine = {
    rating: 0,
    _id: "6553623fb8a3c4c0128c330e",
    name: "LG Front Load Washer",
    manufacturer: "LG",
    mode: "WM345",
    price: 800,
    Categorie: "6553623fb8a3c4c0128c32f8",
    color: "White",
    quantity: 12,
    description: "High-efficiency front load washer with multiple wash programs.",
    image: "https://example.com/lg-washer.jpg",
    addresses: ["123 Main St, Cityville", "456 Oak St, Townsville"],
    categoryDetails: {
        height: 33,
        width: 24,
        depth: 25,
        weight: 150,
        energyRating: "A+++"
    },
    categoryType: "washingMachine",
    date: "2023-11-14T12:04:15.236Z",
    __v: 0
}