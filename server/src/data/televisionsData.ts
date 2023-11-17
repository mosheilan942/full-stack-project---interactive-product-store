const televisions = [
    {
        name: 'Samsung QLED TV',
        manufacturer: 'Samsung',
        model: 'QN55Q70AAFXZA',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 120,
        smartTV: true,
        price: 1099,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch QLED 4K TV with quantum dot technology for lifelike colors.',
        image: 'samsung_tv.jpg',
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
        quantity: 5
      },
      {
        name: 'LG OLED TV',
        manufacturer: 'LG',
        model: 'OLED55C2PUA',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 120,
        smartTV: true,
        price: 1299,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch OLED TV with self-lit pixels for infinite contrast.',
        image: 'lg_tv.jpg',
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
        quantity: 3
      },
      {
        name: 'Sony LED TV',
        manufacturer: 'Sony',
        model: 'XBR55X900H',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 120,
        smartTV: true,
        price: 1199,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch LED TV with Triluminos display for vibrant colors.',
        image: 'sony_tv.jpg',
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
        quantity: 8
      },
      {
        name: 'Vizio SmartCast TV',
        manufacturer: 'Vizio',
        model: 'M558-G1',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 120,
        smartTV: true,
        price: 899,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch SmartCast TV with Dolby Vision for enhanced HDR.',
        image: 'vizio_tv.jpg',
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
        quantity: 10
      },
      {
        name: 'TCL Roku TV',
        manufacturer: 'TCL',
        model: '55S425',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 120,
        smartTV: true,
        price: 699,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch Roku TV with HDR for dynamic picture quality.',
        image: 'tcl_tv.jpg',
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
        quantity: 2
      },
      {
        name: 'Hisense ULED TV',
        manufacturer: 'Hisense',
        model: '55U7G',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 120,
        smartTV: true,
        price: 999,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch ULED TV with Quantum Dot technology for rich colors.',
        image: 'hisense_tv.jpg',
        addresses: [
          { lon: 39.778519, lat: 37.075022, name: 'Derekh Yavne 23, Lod' },
          { lon: 39.781769, lat: 37.087133, name: 'Bialik St 27, Ramat Gan' },
          {
            lon: 39.775924,
            lat: 37.072175,
            name: 'Abba Hillel Silver Rd 8, Ramat Gan'
          }
        ],
        quantity: 7
      },
      {
        name: 'Panasonic Plasma TV',
        manufacturer: 'Panasonic',
        model: 'TC-P55VT60',
        screenSize: 55,
        categoryType: 'television',
        resolution: '1080p',
        refreshRate: 600,
        smartTV: false,
        price: 799,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch Plasma TV with deep blacks and smooth motion.',
        image: 'panasonic_tv.jpg',
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
        quantity: 4
      },
      {
        name: 'Sharp Aquos TV',
        manufacturer: 'Sharp',
        model: 'LC-55N7000U',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 60,
        smartTV: true,
        price: 749,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch Aquos TV with HDR for enhanced contrast.',
        image: 'sharp_tv.jpg',
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
        quantity: 6
      },
      {
        name: 'Insignia Fire TV',
        manufacturer: 'Insignia',
        model: 'NS-55DF710NA19',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 60,
        smartTV: true,
        price: 679,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch Fire TV with Alexa integration for voice control.',
        image: 'insignia_tv.jpg',
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
        quantity: 9
      },
      {
        name: 'Philips Ambilight TV',
        manufacturer: 'Philips',
        model: '55PUS8506/12',
        screenSize: 55,
        categoryType: 'television',
        resolution: '4K',
        refreshRate: 60,
        smartTV: true,
        price: 899,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: '55-inch Ambilight TV with immersive lighting for a unique viewing experience.',
        image: 'philips_tv.jpg',
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
        quantity: 1
      }
];


export default televisions