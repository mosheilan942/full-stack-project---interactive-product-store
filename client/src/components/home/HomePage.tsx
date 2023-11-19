import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CardCategory from './CardCategory';
import { getAllProduct, getTopData } from '../../api/productFuncApi';
import { v4 as uuidv4 } from 'uuid';
import CardProduct from '../cardProduct/CardProduct';
import { CategoryType, ProductType } from '../../types/ProductTypes';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [topData, setTopData] = useState<[CategoryType[], ProductType[]] | null>(null);
    const [allProductsData, setAllProductsData] = useState<ProductType[] | null>(null);

    const navigate = useNavigate();
    const handleClickToComparison = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        navigate(`/comparison`);
    };

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
            <Box sx={{ width: '100%', marginTop: '100px', marginLeft: '50px', display: 'flex', alignItems: 'center', }}>
                <Typography variant='h4'>Our carriers</Typography>
            </Box>

            {topData && topData[0].map((category) => (
                <CardCategory key={uuidv4()} category={category} />
            ))}

            <Box sx={{ width: '100%', marginTop: '100px', marginLeft: '50px', display: 'flex', alignItems: 'center' }}>
                <Typography variant='h4'>may interest you</Typography>
            </Box>

            {topData && topData[1].map((product) => (
                <CardProduct key={uuidv4()} product={product} />
            ))}

            <Box sx={{ width: '100%', marginTop: '100px', marginLeft: '50px', display: 'flex', alignItems: 'center' }}>
                <Typography variant='h4'>All Products</Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', marginLeft: '15%' }}>
                <Button
                    onClick={handleClickToComparison}
                    variant='contained'
                    sx={{

                        background: '#bde4a7',
                        transition: 'background 0.3s',
                        '&:hover': {
                            background: 'gold'
                        },
                        color: 'black',
                        fontSize: '17px',
                        fontFamily: 'inherit',
                        margin: '4px'
                    }}>
                    Go to Comparison
                </Button>
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


