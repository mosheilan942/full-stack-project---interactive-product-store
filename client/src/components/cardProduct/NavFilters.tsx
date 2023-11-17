import React, { useState } from 'react';
import { Box, Input, Select, MenuItem, IconButton } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import BlurOnIcon from '@mui/icons-material/BlurOn';

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
                width: '100%',
                height: 70,
                background: '#1f140a',
                color: 'gold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'sticky',
                top: 0,
                zIndex: 800
            }}
        >
            <Box>
                <Input
                    sx={{ background: '#ffe3b8', width: 200, padding: '0px 3px', marginRight: 2 }}
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconButton onClick={handleSearch} sx={{ background: 'black', color: 'gold' }}>
                    <SearchIcon/>
                </IconButton>
            </Box>

            <Box>
                <Input
                    type='number'
                    placeholder='Min Price'
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value) || '')}
                    sx={{ background: '#ffe3b8', width: 100, marginRight: 2 }}
                />
                <Input
                    type='number'
                    placeholder='Max Price'
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value) || '')}
                    sx={{ background: '#ffe3b8', width: 100, marginRight: 2 }}
                />

                <IconButton onClick={handleFilter} sx={{ background: 'black', color: 'gold' }}>
                    <BlurOnIcon /> 
                </IconButton>
            </Box>
            <Select
                value={sorting}
                onChange={handleSortingChange}
                sx={{ background: '#ffe3b8', width: 120 }}
            >
                <MenuItem value='asc'>Ascending</MenuItem>
                <MenuItem value='desc'>Descending</MenuItem>
            </Select>
        </Box>
    );
};

export default NavFilters;

