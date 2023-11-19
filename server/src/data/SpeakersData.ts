const Speakers = [
    {
        name: 'Bose Portable Speaker',
        manufacturer: 'Bose',
        model: 'SoundLink Revolve+',
        categoryType: 'speaker',
        connectivity: 'Bluetooth, Aux-in',
        batteryLife: 16,
        price: 299,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Portable Bluetooth speaker with 16 hours battery life.',
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
        quantity: 5
    },
    {
        name: 'JBL Bluetooth Speaker',
        manufacturer: 'JBL',
        model: 'Flip 5',
        categoryType: 'speaker',
        connectivity: 'Bluetooth',
        batteryLife: 12,
        waterProof: true,
        price: 99,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Waterproof portable Bluetooth speaker with 12 hours playtime.',
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
        quantity: 3
    },
    {
        name: 'Sony Wireless Speaker',
        manufacturer: 'Sony',
        model: 'SRS-XB33',
        categoryType: 'speaker',
        connectivity: 'Bluetooth, NFC',
        batteryLife: 24,
        price: 149,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Wireless Bluetooth speaker with extra bass and party lights, offering 24 hours of battery life.',
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
        quantity: 8
    },
    {
        name: 'UE Boom 3 Speaker',
        manufacturer: 'Ultimate Ears',
        model: 'Boom 3',
        categoryType: 'speaker',
        connectivity: 'Bluetooth',
        batteryLife: 15,
        waterProof: true,
        price: 129,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Waterproof and shockproof Bluetooth speaker with 15 hours of battery life.',
        image: 'https://picsum.photos/200/300pg',
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
        name: 'Marshall Bluetooth Speaker',
        manufacturer: 'Marshall',
        model: 'Stanmore II',
        categoryType: 'speaker',
        connectivity: 'Bluetooth, Aux-in',
        batteryLife: null,
        price: 349,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Classic design Bluetooth speaker with powerful sound and vintage aesthetics.',
        image: 'https://picsum.photos/200/300.jpg',
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
        name: 'Anker Soundcore Speaker',
        manufacturer: 'Anker',
        model: 'Motion+',
        categoryType: 'speaker',
        connectivity: 'Bluetooth, Aux-in',
        batteryLife: 12,
        price: 99,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Hi-Res Bluetooth speaker with 30W audio output and 12 hours of playtime.',
        image: 'https://picsum.photos/200/300g',
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
        name: 'Sonos One Smart Speaker',
        manufacturer: 'Sonos',
        model: 'One',
        categoryType: 'speaker',
        connectivity: 'Wi-Fi, AirPlay 2',
        batteryLife: null,
        price: 199,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Smart speaker with built-in voice control, compatible with Alexa and Google Assistant.',
        image: 'https://picsum.photos/200/300g',
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
        name: 'Bang & Olufsen Beoplay Speaker',
        manufacturer: 'Bang & Olufsen',
        model: 'Beoplay A1',
        categoryType: 'speaker',
        connectivity: 'Bluetooth',
        batteryLife: 24,
        waterProof: true,
        price: 249,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Compact Bluetooth speaker with 360-degree sound dispersion and 24 hours of battery life.',
        image: 'https://picsum.photos/200/300ker.jpg',
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
    }
];

export default Speakers