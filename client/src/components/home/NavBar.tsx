import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api/productFuncApi';
import { CategoryType } from '../../types/ProductTypes';
import { camelCaseToWords } from '../../utils/camelCaseToWords';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllCategories();
    }, []);

    const fetchAllCategories = async () => {
        try {
            const data: CategoryType[] = await getAllCategories();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategorySelect = (category: string) => {
        setAnchorEl(null);
        navigate(`/category/${category}`);
    };

    return (
        <Box sx={{
            width: 1150,
            height: 70,
            background: 'black',
            color: 'gold',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 90
        }}>
            <Button
                id="categories-menu"
                aria-controls="categories-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ marginLeft: 20 }}
                variant="text"
                color="inherit"
            >
                All categories
            </Button>
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {categories.map((category, index) => (
                    <MenuItem key={index} onClick={() => handleCategorySelect(category.name)}>{camelCaseToWords(category.name)}</MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default NavBar;

