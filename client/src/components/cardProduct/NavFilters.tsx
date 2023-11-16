import React, { useState } from 'react';
import { Box, Input, Select, MenuItem, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

type NavFiltersProps = {
    onSearch: (searchTerm: string) => void;
    onFilter: (minPrice: number, maxPrice: number) => void;
    onSort: (sorting: string) => void;
};

const NavFilters: React.FC<NavFiltersProps> = ({ onSearch, onFilter, onSort }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState<number | ''>('');
    const [maxPrice, setMaxPrice] = useState<number | ''>('');
    const [sorting, setSorting] = useState('asc');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleFilter = () => {
        if (typeof minPrice === 'number' && typeof maxPrice === 'number') {
            onFilter(minPrice, maxPrice);
        }
    };

    const handleSortingChange = (event: SelectChangeEvent<string>) => {
        const newSorting = event.target.value;
        setSorting(newSorting);
        onSort(newSorting);
    };

    return (
        <Box
            sx={{
                width: 1150,
                height: 70,
                background: 'black',
                color: 'gold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'sticky',
                top: 90
            }}
        >
            <Box>
                <Input
                    sx={{ background: 'white', width: 200, padding: '0px 3px', marginRight: 2 }}
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant='contained' onClick={handleSearch}>
                    Search
                </Button>
            </Box>

            <Box>
                <Input
                    type='number'
                    placeholder='Min Price'
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value) || '')}
                    sx={{ background: 'white', width: 100, marginRight: 2 }}
                />
                <Input
                    type='number'
                    placeholder='Max Price'
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value) || '')}
                    sx={{ background: 'white', width: 100, marginRight: 2 }}
                />


                <Button variant='contained' onClick={handleFilter}>
                    Filter
                </Button>
            </Box>
            <Select
                value={sorting}
                onChange={handleSortingChange}
                sx={{ background: 'white', width: 120 }}
            >
                <MenuItem value='asc'>Ascending</MenuItem>
                <MenuItem value='desc'>Descending</MenuItem>
            </Select>
        </Box>
    );
};

export default NavFilters;

