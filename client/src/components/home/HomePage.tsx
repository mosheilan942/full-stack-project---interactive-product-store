import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CardCategory from './CardCategory';
import { getAllCategories, getTopCategories } from '../../api/productFuncApi';
import { v4 as uuidv4 } from 'uuid';
import CardProduct from '../cardProduct/CardProduct';
import { ProductType } from '../../types/ProductTypes';

type Category = {
    _id: string;
    name: string;
    rating: number;
    product: string[];
    image: string;
    __v: number;
}

const HomePage = () => {
    const [categoriesData, setCategoriesData] = useState<[Category[],ProductType[]] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data:[Category[],ProductType[]]  = await getTopCategories();
                // console.log(data);
                setCategoriesData(data);

            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Box sx={{
                width: 1150,
                height: 100,
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant='h3'>Top Five categories</Typography>
            </Box>

            {categoriesData && categoriesData[0].map((category) => {
                return <CardCategory key={uuidv4()} category={category} />
            })}

            <Box sx={{
                width: 1150,
                height: 100,
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant='h3'>Top Five Product</Typography>
            </Box>

            {categoriesData && categoriesData[1].map((product) => {
                return <CardProduct key={uuidv4()}  product={product} />
            })}



        </>
    );
}

export default HomePage;

