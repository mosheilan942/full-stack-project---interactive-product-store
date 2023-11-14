import { Schema, model, connect, SchemaDefinitionProperty, Types } from 'mongoose';
import cellPhonesArray from '../data/cellPhoneData';
import refrigeratorsArray from '../data/refrigeratorData';
import washingMachinesArray from '../data/WashingMachineData';


interface Iproducts {
    name: string
    manufacturer: string
    model: string
    price: number
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
}

const categoriesSchema = new Schema<Icategories>({
    name: { type: String, required: true }
})

const productsSchema = new Schema<Iproducts>({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: false },
    price: { type: Number, required: true },
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
        enum: ['cellPhone', 'refrigerator', 'washingMachine'],
    },
});

// 3. Create a Model.
export const Product = model<Iproducts>('Product', productsSchema);

const categorie = model<Icategories>('Categorie', categoriesSchema);

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
    const cellPhones = new categorie({
        name: "cellPhones"
    })
    await cellPhones.save();

    const refrigerators = new categorie({
        name: "refrigerators"
    })
    await refrigerators.save();

    const washingMachines = new categorie({
        name: "washingMachines"
    })
    await washingMachines.save();

    cellPhonesArray.forEach(async (phone) => {
        const product = new Product({
            ...phone,
            Categorie: cellPhones._id,
            // categoryType: "cellPhone",
            categoryDetails: {
                ...phone.dimensions,
                screenSize: phone.screenSize,
            },

        });
        await product.save();
    })

    Product.findOne({}).populate<{ category: Icategories }>('Categorie').orFail().then(doc => {
        // Works
        const t = doc.Categorie!;
        console.log(t);

    })
    refrigeratorsArray.forEach(async (refrigerator) => {
        const product = new Product({
            ...refrigerator,
            Categorie: refrigerators._id,
            categoryDetails: {
                ...refrigerator.dimensions,
                freezerLocation: refrigerator.freezerLocation
            }
        });
        await product.save();
    })
    washingMachinesArray.forEach(async (washingMachine) => {
        const product = new Product({
            ...washingMachine,
            Categorie: washingMachines._id,
            categoryDetails: {
                ...washingMachine.dimensions,
                energyRating: washingMachine.energyRating
            }
        });
        await product.save();
    })
}