import Refrigerator from "../types/refrigerators"
const refrigerators = [
  {
    name: 'Samsung French Door Refrigerator',
    manufacturer: 'Samsung',
    model: 'RF567',
    categoryType: 'refrigerator',
    color: 'Stainless Steel',
    price: 1500,
    freezerLocation: 'Bottom',
    dimensions: { height: 70, width: 36, depth: 33, weight: 250 },
    quantity: 10,
    description: 'High-tech French door refrigerator with spacious storage.',
    image: 'https://example.com/samsung-refrigerator.jpg',
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
    ]
  },
  {
    name: 'LG Side-by-Side Refrigerator',
    manufacturer: 'LG',
    model: 'LSX123',
    categoryType: 'refrigerator',
    color: 'Black Stainless',
    price: 1200,
    freezerLocation: 'Side',
    dimensions: { height: 68, width: 35, depth: 30, weight: 220 },
    quantity: 15,
    description: 'Sleek side-by-side refrigerator with advanced cooling features.',
    image: 'https://example.com/lg-refrigerator.jpg',
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
    ]
  },
  {
    name: 'Whirlpool Top Freezer Refrigerator',
    manufacturer: 'Whirlpool',
    model: 'WT456',
    categoryType: 'refrigerator',
    color: 'White',
    price: 800,
    freezerLocation: 'Top',
    dimensions: { height: 65, width: 29, depth: 32, weight: 180 },
    quantity: 20,
    description: 'Classic top freezer refrigerator with adjustable shelves.',
    image: 'https://example.com/whirlpool-refrigerator.jpg',
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
    ]
  },
  {
    name: 'KitchenAid Counter-Depth Refrigerator',
    manufacturer: 'KitchenAid',
    model: 'KD789',
    categoryType: 'refrigerator',
    color: 'Black Stainless',
    price: 2000,
    freezerLocation: 'Bottom',
    dimensions: { height: 70, width: 36, depth: 28, weight: 280 },
    quantity: 12,
    description: 'Luxurious counter-depth refrigerator with premium features.',
    image: 'https://example.com/kitchenaid-refrigerator.jpg',
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
    ]
  },
  {
    name: 'GE French Door Refrigerator',
    manufacturer: 'GE Appliances',
    model: 'GFE28GYNFS',
    categoryType: 'refrigerator',
    color: 'Slate',
    price: 1700,
    freezerLocation: 'Bottom',
    dimensions: { height: 69, width: 35, depth: 36, weight: 260 },
    quantity: 18,
    description: 'Modern French door refrigerator with customizable storage options.',
    image: 'https://example.com/ge-refrigerator.jpg',
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
    ]
  },
  {
    name: 'Maytag Side-by-Side Refrigerator',
    manufacturer: 'Maytag',
    model: 'MSD2559FRZ',
    categoryType: 'refrigerator',
    color: 'Fingerprint Resistant Stainless Steel',
    price: 1300,
    freezerLocation: 'Side',
    dimensions: { height: 69, width: 36, depth: 34, weight: 240 },
    quantity: 14,
    description: 'Reliable side-by-side refrigerator with spill-proof glass shelves.',
    image: 'https://example.com/maytag-refrigerator.jpg',
    addresses: [
      { lon: 39.778519, lat: 37.075022, name: 'Derekh Yavne 23, Lod' },
      { lon: 39.781769, lat: 37.087133, name: 'Bialik St 27, Ramat Gan' },
      {
        lon: 39.775924,
        lat: 37.072175,
        name: 'Abba Hillel Silver Rd 8, Ramat Gan'
      }
    ]
  },
  {
    name: 'Bosch Bottom Freezer Refrigerator',
    manufacturer: 'Bosch',
    model: 'B36CL80SNS',
    categoryType: 'refrigerator',
    color: 'Stainless Steel',
    price: 1900,
    freezerLocation: 'Bottom',
    dimensions: { height: 72, width: 36, depth: 33, weight: 270 },
    quantity: 16,
    description: 'Sleek bottom freezer refrigerator with dual cooling system.',
    image: 'https://example.com/bosch-refrigerator.jpg',
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
    ]
  },
  {
    name: 'Frigidaire Top Freezer Refrigerator',
    manufacturer: 'Frigidaire',
    model: 'FFTR1814TS',
    categoryType: 'refrigerator',
    color: 'Stainless Steel',
    price: 700,
    freezerLocation: 'Top',
    dimensions: { height: 66, width: 30, depth: 30, weight: 160 },
    quantity: 22,
    description: 'Affordable top freezer refrigerator with humidity-controlled crisper.',
    image: 'https://example.com/frigidaire-refrigerator.jpg',
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
    ]
  },
  {
    name: 'Haier Compact Refrigerator',
    manufacturer: 'Haier',
    model: 'HC32TW10SV',
    categoryType: 'refrigerator',
    color: 'Virtual Steel',
    price: 250,
    freezerLocation: 'Top',
    dimensions: { height: 32, width: 18, depth: 20, weight: 50 },
    quantity: 25,
    description: 'Space-saving compact refrigerator for small spaces.',
    image: 'https://example.com/haier-refrigerator.jpg',
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
    ]
  },
  {
    name: 'Amana Bottom Freezer Refrigerator',
    manufacturer: 'Amana',
    model: 'ABB1921BRM',
    categoryType: 'refrigerator',
    color: 'Stainless Steel',
    price: 850,
    freezerLocation: 'Bottom',
    dimensions: { height: 69, width: 30, depth: 33, weight: 200 },
    quantity: 19,
    description: 'Efficient bottom freezer refrigerator with adjustable door bins.',
    image: 'https://example.com/amana-refrigerator.jpg',
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
    ]
  }
  ];
export default refrigerators
