const VacuumCleaners = [
    {
        name: 'Dyson Vacuum',
        manufacturer: 'Dyson',
        model: 'V8 Animal',
        power: 115,
        categoryType: 'vacuumCleaner',
        runTime: 40,
        filtration: 'HEPA',
        attachments: ['Crevice tool', 'Combination tool'],
        price: 39,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Cordless stick vacuum with up to 40 minutes of fade-free power.',
        image: 'dyson_vacuum.jpg',
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
        quantity: 10
    },
    {
        name: 'Shark Vacuum',
        manufacturer: 'Shark',
        model: 'NV501',
        power: 1200,
        categoryType: 'vacuumCleaner',
        capacity: 1.2,
        headlights: true,
        attachments: ['Upholstery tool', 'Pet multi-tool'],
        price: 199,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Bagless upright vacuum with lift-away pod for portable cleaning.',
        image: 'shark_vacuum.jpg',
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
        quantity: 8
    },
    {
        name: 'iRobot Roomba Vacuum',
        manufacturer: 'iRobot',
        model: 'Roomba 980',
        power: 1700,
        runTime: 120,
        filtration: 'High-Efficiency Filter',
        attachments: ['Virtual Wall Barrier', 'Dual Multi-Surface Rubber Brushes'],
        price: 699,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        categoryType: 'vacuumCleaner',
        description: 'Smart robotic vacuum with mapping technology and up to 120 minutes of runtime.',
        image: 'irobot_roomba.jpg',
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
        quantity: 5
    },
    {
        name: 'Hoover WindTunnel Vacuum',
        manufacturer: 'Hoover',
        model: 'UH70120',
        power: 12,
        categoryType: 'vacuumCleaner',
        capacity: 2.5,
        headlights: false,
        attachments: ['Extension Wand', 'Crevice Tool'],
        price: 79,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Bagless upright vacuum with WindTunnel technology for effective dirt removal.',
        image: 'hoover_vacuum.jpg',
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
        quantity: 15
    },
    {
        name: 'Miele Compact C1 Vacuum',
        manufacturer: 'Miele',
        model: 'Compact C1 Pure Suction',
        power: 1200,
        categoryType: 'vacuumCleaner',
        runTime: null,
        filtration: 'AirClean System',
        attachments: ['Dusting Brush', 'Upholstery Tool'],
        price: 299,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Compact canister vacuum with powerful suction and AirClean filtration.',
        image: 'miele_vacuum.jpg',
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
        quantity: 12
    },
    {
        name: 'Eureka Mighty Mite Vacuum',
        manufacturer: 'Eureka',
        model: '3670G',
        power: 12,
        categoryType: 'vacuumCleaner',
        capacity: 2.5,
        headlights: false,
        attachments: ['Dusting Brush', 'Crevice Tool'],
        price: 69,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Lightweight canister vacuum with blower port and versatile attachments.',
        image: 'eureka_vacuum.jpg',
        addresses: [
            { lon: 39.778519, lat: 37.075022, name: 'Derekh Yavne 23, Lod' },
            { lon: 39.781769, lat: 37.087133, name: 'Bialik St 27, Ramat Gan' },
            {
                lon: 39.775924,
                lat: 37.072175,
                name: 'Abba Hillel Silver Rd 8, Ramat Gan'
            }
        ],
        quantity: 20
    },
    {
        name: 'Black+Decker Handheld Vacuum',
        manufacturer: 'Black+Decker',
        model: 'CHV1410L',
        power: 16,
        categoryType: 'vacuumCleaner',
        runTime: 15,
        filtration: 'Washable Filter',
        attachments: ['Crevice Tool', 'Brush Tool'],
        price: 59,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Cordless handheld vacuum with lithium-ion technology for strong suction.',
        image: 'black_decker_vacuum.jpg',
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
        quantity: 18
    },
    {
        name: 'Dirt Devil Stick Vacuum',
        manufacturer: 'Dirt Devil',
        model: 'SD20505',
        power: 10,
        categoryType: 'vacuumCleaner',
        capacity: 0.6,
        headlights: false,
        attachments: ['Crevice Tool', 'Floor Nozzle'],
        price: 39,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Lightweight stick vacuum with cyclonic filtration and low-profile nozzle.',
        image: 'dirt_devil_vacuum.jpg',
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
        quantity: 25
    },
    {
        name: 'Bissell Pet Hair Eraser Vacuum',
        manufacturer: 'Bissell',
        model: '1650A',
        power: 8.5,
        capacity: 1.5,
        headlights: true,
        categoryType: 'vacuumCleaner',
        attachments: ['Pet TurboEraser Tool', 'Crevice Tool'],
        price: 219,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Upright vacuum designed for pet owners with specialized pet tools.',
        image: 'bissell_vacuum.jpg',
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
        quantity: 10
    },
    {
        name: 'Neato Robotics D7 Vacuum',
        manufacturer: 'Neato Robotics',
        model: 'Botvac D7 Connected',
        power: 50,
        categoryType: 'vacuumCleaner',
        runTime: 120,
        filtration: 'Ultra Performance Filter',
        attachments: ['Spiral Combo Brush', 'Side Brush'],
        price: 599,
        dimensions: { height: 158.6, length: 74.8, width: 8.9, weight: 206 },
        description: 'Smart robotic vacuum with laser mapping and zone cleaning capabilities.',
        image: 'neato_robotics_vacuum.jpg',
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
        quantity: 8
    }
];


export default VacuumCleaners