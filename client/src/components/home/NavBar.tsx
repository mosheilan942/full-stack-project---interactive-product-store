import { Box, Tab, Tabs, createTheme, ThemeProvider } from '@mui/material';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api/productFuncApi';
import { CategoryType } from '../../types/ProductTypes';
import { camelCaseToWords } from '../../utils/camelCaseToWords';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [selectedTab, setSelectedTab] = useState<number>(-1);
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

    const handleTabSelect = (index: number) => {
        setSelectedTab(index);
        if (index >= 0 && index < categories.length) {
            navigate(`/category/${categories[index].name}`);
        }
    };

    const theme = createTheme({
        components: {
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: 'blue',
                    },
                },
            },
        },
    });

    return (

        <ThemeProvider theme={theme}>
            <Box sx={{
                maxWidth: '100%',
                width: 'inherit',
                height: 70,
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                top: 85,
                left: 0,
                zIndex: 800
            }}>
                <Tabs
                    value={selectedTab}
                    onChange={(_, newIndex) => handleTabSelect(newIndex)}
                    aria-label="basic tabs example"
                >
                    {categories.map((category, index) => (
                        <Tab sx={{color: 'white', fontSize: '120%'}} key={index} label={camelCaseToWords(category.name)} />
                    ))}
                </Tabs>
            </Box>
        </ThemeProvider>
    );
};

export default NavBar;
