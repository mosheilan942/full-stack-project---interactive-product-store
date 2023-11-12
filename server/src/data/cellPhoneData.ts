import CellPhone from "../types/cellPhone"
const cellPhones: CellPhone[] = [
    {
      name: "iPhone 13",
      manufacturer: "Apple",
      model: "13",
      color: "Midnight",
      isKosher: false,
      category: "CellPhone",
      price: 1000,
      screenSize: 6.1,
      dimensions: { height: 146.7, length: 71.5, width: 7.7, weight: 173 },
      quantity: 50,
      description: "The latest iPhone with advanced camera and A15 Bionic chip.",
      image: "https://example.com/iphone-13.jpg",
      addresses: ["123 Main St, Cityville", "456 Oak St, Townsville"],
    },
    {
      name: "Samsung Galaxy S21",
      manufacturer: "Samsung",
      model: "S21",
      color: "Phantom Gray",
      isKosher: false,
      category: "CellPhone",
      price: 900,
      screenSize: 6.2,
      dimensions: { height: 151.7, length: 71.2, width: 7.9, weight: 171 },
      quantity: 40,
      description: "Powerful Android phone with a stunning display and versatile camera system.",
      image: "https://example.com/galaxy-s21.jpg",
      addresses: ["789 Elm St, Villagetown", "101 Pine St, Hamletville"],
    },
    {
      name: "Google Pixel 6",
      manufacturer: "Google",
      model: "Pixel 6",
      color: "Sorta Seafoam",
      isKosher: false,
      category: "CellPhone",
      price: 800,
      screenSize: 6.4,
      dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
      quantity: 30,
      description: "Flagship Pixel phone with exceptional camera capabilities and stock Android experience.",
      image: "https://example.com/pixel-6.jpg",
      addresses: ["456 Maple St, Suburbia", "789 Pine St, Countryside"],
    },
    {
      name: "OnePlus 9",
      manufacturer: "OnePlus",
      model: "9",
      color: "Astral Black",
      isKosher: false,
      category: "CellPhone",
      price: 950,
      screenSize: 6.55,
      dimensions: { height: 160, length: 74.2, width: 8.7, weight: 192 },
      quantity: 25,
      description: "OnePlus flagship phone with Hasselblad camera and smooth performance.",
      image: "https://example.com/oneplus-9.jpg",
      addresses: ["101 Oak St, Countryside", "789 Birch St, Suburbia"],
    },
    {
      name: "Xiaomi Mi 11",
      manufacturer: "Xiaomi",
      model: "Mi 11",
      color: "Midnight Gray",
      isKosher: false,
      category: "CellPhone",
      price: 700,
      screenSize: 6.81,
      dimensions: { height: 164.3, length: 74.6, width: 8.1, weight: 196 },
      quantity: 35,
      description: "Premium Xiaomi phone with a high-refresh-rate display and Snapdragon 888.",
      image: "https://example.com/mi-11.jpg",
      addresses: ["456 Pine St, Villagetown", "789 Cedar St, Hamletville"],
    },
    {
      name: "Sony Xperia 1 III",
      manufacturer: "Sony",
      model: "Xperia 1 III",
      color: "Frosted Black",
      isKosher: false,
      category: "CellPhone",
      price: 1100,
      screenSize: 6.5,
      dimensions: { height: 165, length: 71, width: 8.2, weight: 186 },
      quantity: 20,
      description: "Sony's flagship phone with a 4K OLED display and versatile camera setup.",
      image: "https://example.com/xperia-1-iii.jpg",
      addresses: ["789 Elm St, Suburbia", "101 Pine St, Townsville"],
    },
    {
      name: "Motorola Moto G Power (2021)",
      manufacturer: "Motorola",
      model: "Moto G Power (2021)",
      color: "Flash Gray",
      isKosher: false,
      category: "CellPhone",
      price: 600,
      screenSize: 6.6,
      dimensions: { height: 165.3, length: 75.9, width: 9.5, weight: 206 },
      quantity: 15,
      description: "Budget-friendly Motorola phone with a large battery for extended usage.",
      image: "https://example.com/moto-g-power-2021.jpg",
      addresses: ["101 Birch St, Villagetown", "456 Pine St, Hamletville"],
    },
    {
      name: "Oppo Find X3 Pro",
      manufacturer: "Oppo",
      model: "Find X3 Pro",
      color: "Gloss Black",
      isKosher: false,
      category: "CellPhone",
      price: 1200,
      screenSize: 6.7,
      dimensions: { height: 163.6, length: 74, width: 8.3, weight: 193 },
      quantity: 28,
      description: "Oppo flagship phone with a high-quality camera system and fast charging.",
      image: "https://example.com/find-x3-pro.jpg",
      addresses: ["789 Oak St, Suburbia", "101 Cedar St, Townsville"],
    },
    {
      name: "Nokia 8.3 5G",
      manufacturer: "Nokia",
      model: "8.3 5G",
      color: "Polar Night",
      isKosher: false,
      category: "CellPhone",
      price: 850,
      screenSize: 6.81,
      dimensions: { height: 171.9, length: 78.6, width: 8.99, weight: 220 },
      quantity: 22,
      description: "Nokia 5G phone with a large display and ZEISS optics for the camera.",
      image: "https://example.com/nokia-8.3-5g.jpg",
      addresses: ["456 Maple St, Cityville", "789 Birch St, Townsville"],
    },
    {
      name: "Realme GT",
      manufacturer: "Realme",
      model: "GT",
      color: "Silver",
      isKosher: false,
      category: "CellPhone",
      price: 750,
      screenSize: 6.43,
      dimensions: { height: 158.5, length: 73.3, width: 8.4, weight: 186 },
      quantity: 18,
      description: "Realme flagship phone with a Snapdragon 870 processor and 120Hz Super AMOLED display.",
      image: "https://example.com/realme-gt.jpg",
      addresses: ["101 Pine St, Cityville", "456 Cedar St, Suburbia"],
    },
  ];
  export default cellPhones
  // You can access individual cell phones like this:
//   const firstCellPhone = cellPhones[0];
//   console.log(firstCellPhone);
  