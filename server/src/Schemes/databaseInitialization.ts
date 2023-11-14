import { Schema, model, connect, SchemaDefinitionProperty, Types } from 'mongoose';
import cellPhonesArray from '../data/cellPhoneData';
import refrigeratorsArray from '../data/refrigeratorData';
import washingMachinesArray from '../data/WashingMachineData';


interface Iproducts {
    name: string
    manufacturer: string
    model: string
    price: number
    rating: number
    date: SchemaDefinitionProperty<number, Iproducts> | undefined
    Categorie?: Types.ObjectId,
    color: string;
    dimensions?: {
        height: number;
        length: number;
        width: number;
        weight: number;
    };
    quantity: number;
    description: string;
    image: string;
    addresses: string[];
    categoryDetails: string
    categoryType: string
}

interface Icategories {
    name: string
    rating: number
    image: string
}

const categoriesSchema = new Schema<Icategories>({
    name: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    image: { type: String, default: "https://tinyurl.com/22brmde9", required: true }
})

const productsSchema = new Schema<Iproducts>({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: false },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0, required: true },
    date: { type: Date, default: Date.now },
    Categorie: { type: Schema.Types.ObjectId, ref: 'Categorie' },
    color: { type: String, required: false },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    addresses: { type: [String], required: true },
    categoryDetails: {
        type: Schema.Types.Mixed,
        default: {},
    },
    categoryType: {
        type: String,
        required: true,
        enum: ['cellPhone', 'refrigerator', 'washingMachine',
            'televisions', 'microwaves', 'speakers', 'vacuum cleaners'],
    },
});

const arrayCategories = ['cellPhone', 'refrigerator', 'washingMachine',
    'televisions', 'microwaves', 'speakers', 'vacuum cleaners']

// 3. Create a Model.
export const Product = model<Iproducts>('Product', productsSchema);

export const categorie = model<Icategories>('Categorie', categoriesSchema);

const cellPhoneDetailsSchema = new Schema({
    dimensions: {
        height: { type: Number, required: true },
        length: { type: Number, required: true },
        width: { type: Number, required: true },
        weight: { type: Number, required: true },
    },
    screenSize: { type: Number, required: false },
});

const refrigeratorsDetailsSchema = new Schema({
    dimensions: {
        height: { type: Number, required: true },
        width: { type: Number, required: true },
        depth: { type: Number, required: true },
        weight: { type: Number, required: true },
    },
    freezerLocation: { type: String, required: false },
});

const washingMachinesDetailsSchema = new Schema({
    energyRating: { type: String, required: true },
});




export async function run() {

    arrayCategories.forEach( async (newCategorie) => {
        const setCategorie = new categorie({
            name: newCategorie
        })
        await setCategorie.save();
    })
    

    cellPhonesArray.forEach(async (phone) => {
        const nameOfcategorie = await categorie.find({name: "cellPhone"}, "cellPhone._id").exec()
        const product = new Product({
            ...phone,
            Categorie: nameOfcategorie[0],
            categoryType: 'cellPhone',
            categoryDetails: {
                ...phone.dimensions,
                screenSize: phone.screenSize,
            },

        });
        await product.save();
    })

    
    refrigeratorsArray.forEach(async (refrigerator) => {
        const nameOfcategorie = await categorie.find({name: "refrigerator"}, "cellPhone._id")
        const product = new Product({
            ...refrigerator,
            Categorie: nameOfcategorie[0],
            categoryType: 'refrigerator',
            categoryDetails: {
                ...refrigerator.dimensions,
                freezerLocation: refrigerator.freezerLocation
            }
        });
        await product.save();
    })
    washingMachinesArray.forEach(async (washingMachine) => {
        const nameOfcategorie = await categorie.find({name: "washingMachine"}, "cellPhone._id").exec()
        const product = new Product({
            ...washingMachine,
            Categorie: nameOfcategorie[0],
            categoryType: 'washingMachine',
            categoryDetails: {
                ...washingMachine.dimensions,
                energyRating: washingMachine.energyRating
            }
        });
        await product.save();
    })
}
