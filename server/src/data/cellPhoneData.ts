import CellPhone from "../types/cellPhone"
const cellPhones = [{
  name: 'iPhone 13',
  manufacturer: 'Apple',
  model: '13',
  color: 'Midnight',
  categoryType: 'cellPhone',
  price: 1000,
  dimensions: { height: 146.7, length: 71.5, width: 7.7, weight: 173 },
  quantity: 50,
  description: 'The latest iPhone with advanced camera and A15 Bionic chip.',
  image: 'https://picsum.photos/200/300',
  addresses: [
    {
      lon: 34.778519,
      lat: 32.075022,
      name: '42 Dizengoff St, Tel Aviv-Yafo'
    },
    {
      lon: 34.781769,
      lat: 32.087133,
      name: '19 King George St, Jerusalem'
    },
    {
      lon: 34.775924,
      lat: 32.072175,
      name: 'HaHashmonaim St 8, Tel Aviv-Yafo'
    }
  ],
  categoryDetails: {
    screenSize: 6.1,
    isKosher: false,
    operatingSystem: 'iOS',
    specialFeatures: ['A15 Bionic chip'],
    storageCapacity: '128GB',
    cameraSpecs: { front: '12 MP', rear: 'Dual 12 MP, 12 MP' }
  }
},
{
  name: 'Samsung Galaxy S21',
  manufacturer: 'Samsung',
  model: 'S21',
  color: 'Phantom Gray',
  categoryType: 'cellPhone',
  price: 900,
  dimensions: { height: 151.7, length: 71.2, width: 7.9, weight: 171 },
  quantity: 40,
  description: 'Powerful Android phone with a stunning display and versatile camera system.',
  image: 'https://picsum.photos/200/300',
  addresses: [
    {
      lon: 35.778519,
      lat: 33.075022,
      name: '2 Ben Yehuda St, Tel Aviv-Yafo'
    },
    {
      lon: 35.781769,
      lat: 33.087133,
      name: '28 Allenby St, Tel Aviv-Yafo'
    },
    { lon: 35.775924, lat: 33.072175, name: '21 Herzl St, Netanya' }
  ],
  categoryDetails: {
    screenSize: 6.2,
    isKosher: false,
    operatingSystem: "Android",
    specialFeatures: ["Stunning display", "Versatile camera system"],
    storageCapacity: "256GB",
    cameraSpecs: {
      front: "10 MP",
      rear: "Triple 12 MP, 64 MP, 12 MP",
    }
  },
},
{
  name: 'Google Pixel 6',
  manufacturer: 'Google',
  model: 'Pixel 6',
  color: 'Sorta Seafoam',
  categoryType: 'cellPhone',
  price: 800,
  dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
  quantity: 30,
  description: 'Flagship Pixel phone with exceptional camera capabilities and stock Android experience.',
  image: 'https://picsum.photos/200/300',
  addresses: [
    {
      lon: 36.778519,
      lat: 34.075022,
      name: "Kikar HaAtzmaut 1, Be'er Sheva"
    },
    {
      lon: 36.781769,
      lat: 34.087133,
      name: 'Hativat Yiftah St 3, Eilat'
    },
    {
      lon: 36.775924,
      lat: 34.072175,
      name: 'Yigael Yadin Blvd 1, Ashdod'
    }
  ],
  categoryDetails: {
    isKosher: false,
    screenSize: 6.4,
    operatingSystem: "Android",
    specialFeatures: ["Exceptional camera", "Stock Android experience"],
    storageCapacity: "256GB",
    cameraSpecs: {
      front: "8 MP",
      rear: "Dual 50 MP, 12 MP",
    },
  }
},
{
  name: 'OnePlus 9',
  manufacturer: 'OnePlus',
  model: '9',
  color: 'Astral Black',
  categoryType: 'cellPhone',
  price: 950,
  dimensions: { height: 160, length: 74.2, width: 8.7, weight: 192 },
  quantity: 25,
  description: 'OnePlus flagship phone with Hasselblad camera and smooth performance.',
  image: 'https://picsum.photos/200/300',
  addresses: [
    {
      lon: 37.778519,
      lat: 35.075022,
      name: '4 Levi Eshkol St, Petah Tikva'
    },
    { lon: 37.781769, lat: 35.087133, name: '103 Herzl St, Hadera' },
    {
      lon: 37.775924,
      lat: 35.072175,
      name: 'Yehuda Rd 157, Rishon LeTsiyon'
    }
  ],
  categoryDetails: {
    isKosher: false,
    screenSize: 6.55,
    operatingSystem: "Android",
    specialFeatures: ["Hasselblad camera", "Smooth performance"],
    storageCapacity: "128GB",
    cameraSpecs: {
      front: "16 MP",
      rear: "Triple 48 MP, 50 MP, 2 MP",
    },
  }
},
{
  name: 'Xiaomi Mi 11',
  manufacturer: 'Xiaomi',
  model: 'Mi 11',
  color: 'Midnight Gray',
  categoryType: 'cellPhone',
  price: 700,
  dimensions: { height: 164.3, length: 74.6, width: 8.1, weight: 196 },
  quantity: 35,
  description: 'Premium Xiaomi phone with a high-refresh-rate display and Snapdragon 888.',
  image: 'https://picsum.photos/200/300',
  addresses: [
    { lon: 38.778519, lat: 36.075022, name: 'Palmach St 22, Nahariya' },
    {
      lon: 38.781769,
      lat: 36.087133,
      name: 'Ha-Ugavim Ave 79, Kiryat Bialik'
    },
    {
      lon: 38.775924,
      lat: 36.072175,
      name: '1st Aliyah St 5, Karmiel'
    }
  ],
  categoryDetails: {
    isKosher: false,
    screenSize: 6.81,
    operatingSystem: "Android",
    specialFeatures: ["High-refresh-rate display", "Snapdragon 888"],
    storageCapacity: "256GB",
    cameraSpecs: {
      front: "20 MP",
      rear: "Triple 108 MP, 13 MP, 5 MP",
    },
  }
},
{
  name: 'Sony Xperia 1 III',
  manufacturer: 'Sony',
  model: 'Xperia 1 III',
  color: 'Frosted Black',
  categoryType: 'cellPhone',
  price: 1100,
  dimensions: { height: 165, length: 71, width: 8.2, weight: 186 },
  quantity: 20,
  description: "Sony's flagship phone with a 4K OLED display and versatile camera setup.",
  image: 'https://picsum.photos/200/300.jpg',
  addresses: [
    { lon: 39.778519, lat: 37.075022, name: 'Derekh Yavne 23, Lod' },
    { lon: 39.781769, lat: 37.087133, name: 'Bialik St 27, Ramat Gan' },
    {
      lon: 39.775924,
      lat: 37.072175,
      name: 'Abba Hillel Silver Rd 8, Ramat Gan'
    }
  ],
  categoryDetails: {
    isKosher: false,
    screenSize: 6.5,
    operatingSystem: "Android",
    specialFeatures: ["4K OLED display", "Versatile camera setup"],
    storageCapacity: "256GB",
    cameraSpecs: {
      front: "8 MP",
      rear: "Triple 12 MP, 12 MP, 12 MP",
    },
  }
},
{
  name: 'Motorola Moto G Power (2021)',
  manufacturer: 'Motorola',
  model: 'Moto G Power (2021)',
  color: 'Flash Gray',
  categoryType: 'cellPhone',
  price: 600,
  dimensions: { height: 165.3, length: 75.9, width: 9.5, weight: 206 },
  quantity: 15,
  description: 'Budget-friendly Motorola phone with a large battery for extended usage.',
  image: 'https://picsum.photos/200/300r-2021.jpg',
  addresses: [
    {
      lon: 40.778519,
      lat: 38.075022,
      name: "Yigal Allon St 87, Giv'atayim"
    },
    { lon: 40.781769, lat: 38.087133, name: 'Kedem St 29, Rehovot' },
    {
      lon: 40.775924,
      lat: 38.072175,
      name: 'Hativat Carmeli St 3, Afula'
    }
  ],
  categoryDetails: {
    isKosher: false,
    screenSize: 6.6,
    operatingSystem: "Android",
    specialFeatures: ["Budget-friendly", "Large battery"],
    storageCapacity: "128GB",
    cameraSpecs: {
      front: "8 MP",
      rear: "Triple 48 MP, 2 MP, 2 MP",
    },
  }
},
{
  name: 'Oppo Find X3 Pro',
  manufacturer: 'Oppo',
  model: 'Find X3 Pro',
  color: 'Gloss Black',
  categoryType: 'cellPhone',
  price: 1200,
  dimensions: { height: 163.6, length: 74, width: 8.3, weight: 193 },
  quantity: 28,
  description: 'Oppo flagship phone with a high-quality camera system and fast charging.',
  image: 'https://picsum.photos/200/300.jpg',
  addresses: [
    {
      lon: 41.778519,
      lat: 39.075022,
      name: 'Henrietta Szold St 6, Bnei Brak'
    },
    {
      lon: 41.781769,
      lat: 39.087133,
      name: 'Ramatayim Menashe Blvd 3, Ashkelon'
    },
    {  
        lon: 41.775924,
        lat: 39.072175,
        name: 'Yehuda Halevi St 65, Tel Aviv-Yafo'
      
    }
  ],
  categoryDetails: {
    isKosher: false,
    screenSize: 6.7,
    operatingSystem: "Android",
    specialFeatures: ["High-quality camera system", "Fast charging"],
    storageCapacity: "256GB",
    cameraSpecs: {
      front: "32 MP",
      rear: "Quad 50 MP, 50 MP, 13 MP, 3 MP",
    },
  }
},
{
  name: 'Nokia 8.3 5G',
  manufacturer: 'Nokia',
  model: '8.3 5G',
  color: 'Polar Night',
  categoryType: 'cellPhone',
  price: 850,
  dimensions: { height: 171.9, length: 78.6, width: 8.99, weight: 220 },
  quantity: 22,
  description: 'Nokia 5G phone with a large display and ZEISS optics for the camera.',
  image: 'https://picsum.photos/200/300g.jpg',
  addresses: [
    {
      lon: 42.778519,
      lat: 40.075022,
      name: 'Ben Gurion Blvd 2, Holon'
    },
    {
      lon: 42.781769,
      lat: 40.087133,
      name: 'Yehuda Ha-Levi St 19, Tel Aviv-Yafo'
    },
    { lon: 42.775924, lat: 40.072175, name: "Hertzel St 118, El'ad" }
  ],
  categoryDetails: {
    isKosher: false,
    screenSize: 6.81,
    specialFeatures: ["5G connectivity", "ZEISS optics"],
    storageCapacity: "128GB",
    cameraSpecs: {
      front: "24 MP",
      rear: "Quad 64 MP, 12 MP, 2 MP, 2 MP",
    },
  }
},
{
  name: 'Realme GT',
  manufacturer: 'Realme',
  model: 'GT',
  color: 'Silver',
  categoryType: 'cellPhone',
  price: 750,
  dimensions: { height: 158.5, length: 73.3, width: 8.4, weight: 186 },
  quantity: 18,
  description: 'Realme flagship phone with a Snapdragon 870 processor and 120Hz Super AMOLED display.',
  image: 'https://picsum.photos/200/300pg',
  addresses: [
    {
      lon: 43.778519,
      lat: 41.075022,
      name: 'Histadrut St 29, Netanya'
    },
    { lon: 43.781769, lat: 41.087133, name: 'Nahal Ashan 7, Modiin' },
    {
      lon: 43.775924,
      lat: 41.072175,
      name: '42 Dizengoff St, Tel Aviv-Yafo'
    }
  ],
  categoryDetails: {
    isKosher: false,
    screenSize: 6.43,
    operatingSystem: "Android",
    specialFeatures: ["Snapdragon 870 processor", "120Hz Super AMOLED display"],
    storageCapacity: "256GB",
    cameraSpecs: {
      front: "16 MP",
      rear: "64 MP, 8 MP, 2 MP, 2 MP",
    },
  }
}]
export default cellPhones
