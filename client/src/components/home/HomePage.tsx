import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CardCategory from './CardCategory';
import { getAllCategories } from '../../api/productFuncApi';

type Category =  {
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
            {/* Header */}
            <Box sx={{
                width: 1150,
                height: 100,
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant='h3'>All categories</Typography>
            </Box>

            {/* Render each category using CardCategory component */}
            {categoriesData.map((category) => (
                <CardCategory key={category.name} category={category} />
            ))}
        </>
    );
}

export default HomePage;

