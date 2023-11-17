import washingMachine from "../types/washingMachines"

const washingMachines = [
  {
    name: 'LG Front Load Washer',
    manufacturer: 'LG',
    model: 'WM345',
    color: 'White',
    price: 800,
    categoryType: 'washingMachine',
    energyRating: 'A+++',
    dimensions: { height: 33, width: 24, depth: 25, weight: 150 },
    quantity: 12,
    description: 'High-efficiency front load washer with multiple wash programs.',
    image: 'https://example.com/lg-washer.jpg',
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
    name: 'Samsung Top Load Washer',
    manufacturer: 'Samsung',
    model: 'WA456',
    color: 'Silver',
    price: 700,
    categoryType: 'washingMachine',
    energyRating: 'A++',
    dimensions: { height: 42, width: 28, depth: 29, weight: 180 },
    quantity: 15,
    description: 'Top load washer with built-in sink and advanced stain removal.',
    image: 'https://example.com/samsung-washer.jpg',
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
    name: 'Whirlpool Compact Washer',
    manufacturer: 'Whirlpool',
    model: 'WC789',
    color: 'Black',
    price: 500,
    categoryType: 'washingMachine',
    energyRating: 'A+',
    dimensions: { height: 33, width: 23, depth: 22, weight: 120 },
    quantity: 18,
    description: 'Space-saving compact washer for small laundry rooms.',
    image: 'https://example.com/whirlpool-washer.jpg',
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
    name: 'Maytag High-Efficiency Washer',
    manufacturer: 'Maytag',
    model: 'MH456',
    color: 'Stainless Steel',
    price: 900,
    categoryType: 'washingMachine',
    energyRating: 'A+++',
    dimensions: { height: 36, width: 27, depth: 28, weight: 160 },
    quantity: 10,
    description: 'Heavy-duty high-efficiency washer with large capacity.',
    image: 'https://example.com/maytag-washer.jpg',
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
    name: 'GE Appliances Stackable Washer',
    manufacturer: 'GE Appliances',
    model: 'GSE789',
    color: 'White',
    price: 1200,
    categoryType: 'washingMachine',
    energyRating: 'A++',
    dimensions: { height: 75, width: 27, depth: 31, weight: 200 },
    quantity: 14,
    description: 'Stackable washer with steam cleaning and stain removal options.',
    image: 'https://example.com/ge-washer.jpg',
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
    name: 'Bosch Compact Front Load Washer',
    manufacturer: 'Bosch',
    model: 'BFLW32',
    color: 'Graphite',
    price: 1000,
    categoryType: 'washingMachine',
    energyRating: 'A+++',
    dimensions: { height: 33, width: 23, depth: 25, weight: 130 },
    quantity: 20,
    description: 'Compact front load washer with quiet operation and quick wash cycles.',
    image: 'https://example.com/bosch-washer.jpg',
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
    name: 'Amana Top Load Washer with Dual Action Agitator',
    manufacturer: 'Amana',
    model: 'ATL456',
    color: 'White',
    price: 600,
    categoryType: 'washingMachine',
    energyRating: 'A+',
    dimensions: { height: 42, width: 28, depth: 29, weight: 170 },
    quantity: 16,
    description: 'Top load washer with dual-action agitator for effective cleaning.',
    image: 'https://example.com/amana-washer.jpg',
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
    name: 'Haier Portable Washer',
    manufacturer: 'Haier',
    model: 'HPW456',
    color: 'Blue',
    price: 300,
    categoryType: 'washingMachine',
    energyRating: 'A',
    dimensions: { height: 31, width: 18, depth: 20, weight: 50 },
    quantity: 25,
    description: 'Portable washer ideal for small apartments or camping.',
    image: 'https://example.com/haier-washer.jpg',
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
    name: 'Frigidaire High-Efficiency Front Load Washer',
    manufacturer: 'Frigidaire',
    model: 'FFLW32',
    color: 'Black Stainless',
    price: 1100,
    categoryType: 'washingMachine',
    energyRating: 'A+++',
    dimensions: { height: 36, width: 27, depth: 28, weight: 170 },
    quantity: 22,
    description: 'Advanced front load washer with sanitize cycle and adaptive vibration control.',
    image: 'https://example.com/frigidaire-washer.jpg',
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
    name: 'KitchenAid Top Load Washer',
    manufacturer: 'KitchenAid',
    model: 'KT789',
    color: 'White',
    price: 950,
    categoryType: 'washingMachine',
    energyRating: 'A++',
    dimensions: { height: 42, width: 28, depth: 29, weight: 180 },
    quantity: 19,
    description: 'Top load washer with powerful cleaning performance and multiple wash options.',
    image: 'https://example.com/kitchenaid-washer.jpg',
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
  }];
export default washingMachines
