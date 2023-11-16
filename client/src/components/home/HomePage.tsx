import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CardCategory from './CardCategory';
import { getAllCategories, getTopCategories } from '../../api/productFuncApi';
import { v4 as uuidv4 } from 'uuid';

type Category = {
    _id: string;
    name: string;
    rating: number;
    product: string[];
    image: string;
    __v: number;
}

const HomePage = () => {
    const [categoriesData, setCategoriesData] = useState<Category[][]| null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: Category[][] = await getTopCategories();
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
                    // console.log('fd',categoriesData);
                    
                    return <CardCategory key={uuidv4()} category={category} />
                })}
           
        </>
    );
}

export default HomePage;

