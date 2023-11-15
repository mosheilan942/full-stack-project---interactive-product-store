import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CardCategory from './CardCategory';
import { getAllCategories } from '../../api/productFuncApi';
import NavBar from '../NavBar';

type Category = {
    _id: string;
    name: string;
    rating: number;
    product: string[];
    image: string;
    __v: number;
}

const HomePage = () => {
    const [categoriesData, setCategoriesData] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: Category[] = await getAllCategories();
                setCategoriesData(data);
                console.log(data);

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
                <Typography variant='h3'>All categories</Typography>
            </Box>
            {categoriesData.map((category) => (
                <CardCategory key={category.name} category={category} />
            ))}
        </>
    );
}

export default HomePage;

