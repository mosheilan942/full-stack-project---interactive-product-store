import React, { useState } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    Select,
    MenuItem,
    Slider,
    Input,
    IconButton,
    Typography,
    Box,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

enum SortingOrder {
    ASC = 'asc',
    DESC = 'desc',
}

type NavFiltersProps = {
    onSearch: (searchTerm: string) => void;
    onFilter: (minPrice: number, maxPrice: number) => void;
    onSort: (sorting: SortingOrder) => void;
};

const NavFilters: React.FC<NavFiltersProps> = ({ onSearch, onFilter, onSort }) => {
    const price: number = 5000;

    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [sortingOrder, setSortingOrder] = useState<SortingOrder>(SortingOrder.ASC);
    const [searchOpen, setSearchOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState<[number | null, number | null]>([0, price]);

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleFilter = () => {
        if (minPrice !== null && maxPrice !== null) {
            onFilter(minPrice, maxPrice);
        }
    };

    const handleSortingChange = (event: SelectChangeEvent<string>) => {
        const newSorting = event.target.value as SortingOrder;
        setSortingOrder(newSorting);
        onSort(newSorting);
    };

    const handleSectionToggle = (section: string) => {
        switch (section) {
            case 'search':
                setSearchOpen(!searchOpen);
                break;
            case 'sort':
                setSortOpen(!sortOpen);
                break;
            case 'price':
                setPriceOpen(!priceOpen);
                break;
            default:
                break;
        }
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchIconClick = () => {
        handleSearch();
    };

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        const [newMinPrice, newMaxPrice] = newValue as number[];
        setMinPrice(newMinPrice);
        setMaxPrice(newMaxPrice);
        handleFilter();
    };

    return (
        <Box
            sx={{
                width: '25%',
                minHeight: '300px',
                background: 'white',
                margin: '10px',
                borderRadius: '10px',
                border: '1px solid skyblue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
                flexWrap: 'wrap',
                position: 'sticky',
                top: 120,
                zIndex: 800
            }}
        >
           <Typography sx={{ marginTop: '10px' }} variant="h5">Sort by</Typography>

            <hr style={{ width: '90%', color: 'gray' }}/>
            <List>
                <ListItem sx={{ width: '250px' }} onClick={() => handleSectionToggle('search')}>
                    <ListItemText primary="Search" />
                    {searchOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={searchOpen} timeout="auto" unmountOnExit>
                    <Input
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <IconButton onClick={handleSearchIconClick}>
                        <SearchIcon />
                    </IconButton>
                </Collapse>
            </List>
            <hr style={{ width: '90%', color: 'gray' }}/>
            <List>
                <ListItem sx={{ width: '250px' }} onClick={() => handleSectionToggle('sort')}>
                    <ListItemText primary="Sorting" />
                    {sortOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={sortOpen} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        <ListItem>
                            <ListItemText primary="Sorting Order" />
                            <Select sx={{ marginLeft: '5px' }} value={sortingOrder} onChange={handleSortingChange}>
                                <MenuItem value={SortingOrder.ASC}>Ascending</MenuItem>
                                <MenuItem value={SortingOrder.DESC}>Descending</MenuItem>
                            </Select>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <hr style={{ width: '90%', color: 'gray' }}/>
            <List>
                <ListItem sx={{ width: '250px' }} onClick={() => handleSectionToggle('price')}>
                    <ListItemText primary="By price" />
                    {priceOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={priceOpen} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        <ListItem>
                            <ListItemText primary="Price Range" />
                            <Slider
                                value={[minPrice !== null ? minPrice : 0, maxPrice !== null ? maxPrice : price]}
                                onChange={handlePriceChange}
                                onChangeCommitted={(event, newValue) => setSelectedPrice(newValue as [number | null, number | null])}
                                valueLabelDisplay="off"
                                min={0}
                                max={price}
                                sx={{ width: '100%', color: 'black' }}
                            />
                        </ListItem>
                        <Typography variant="body2" align="center" style={{ marginTop: '8px' }}>
                            {selectedPrice[0] !== null && selectedPrice[1] !== null
                                ? `$${selectedPrice[0]} - $${selectedPrice[1]}`
                                : 'Select a price range'}
                        </Typography>
                    </List>
                </Collapse>
            </List>
        </Box>
    );
};

export default NavFilters;



