import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CardCategory from './CardCategory';
import { getAllProduct, getTopData } from '../../api/productFuncApi';
import { v4 as uuidv4 } from 'uuid';
import CardProduct from '../cardProduct/CardProduct';
import { CategoryType, ProductType } from '../../types/ProductTypes';
import NavBar from './NavBar';

const HomePage = () => {
    const [topData, setTopData] = useState<[CategoryType[], ProductType[]] | null>(null);
    const [allProductsData, setAllProductsData] = useState<ProductType[] | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categories, products] = await getTopData();
                setTopData([categories, products]);
            } catch (error) {
                console.error('Error fetching top data:', error);
            }

            try {
                const dataProducts: ProductType[] = await getAllProduct();
                setAllProductsData(dataProducts);
                console.log('dataProducts:', dataProducts);

            } catch (error) {
                console.error('Error fetching all products:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <NavBar />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h3'>Top Five categories</Typography>
            </Box>

            {topData && topData[0].map((category) => (
                <CardCategory key={uuidv4()} category={category} />
            ))}

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h3'>Top Five Product</Typography>
            </Box>

            {topData && topData[1].map((product) => (
                <CardProduct key={uuidv4()} product={product} />
            ))}

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h3'>All Products</Typography>
            </Box>

            {Array.isArray(allProductsData) ? allProductsData.map((product) => (
                <CardProduct key={uuidv4()} product={product} />
            ))
                :
                <Typography variant='h5'>{allProductsData}</Typography>
            }
        </>
    );
};

export default HomePage;


