// CardsProducts.tsx
import { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import CardProduct from './CardProduct';
import { camelCaseToWords } from '../../utils/camelCaseToWords';
import { ProductType } from '../../types/ProductTypes';
import { getSearchProduct, getFilterProduct, getOrderProductByAlphabetical } from '../../api/productFuncApi';
import { useNavigate, useParams } from 'react-router-dom';
import NavFilters from './NavFilters';

const CardsProducts = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState<ProductType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [sorting, setSorting] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      if (categoryName) {
        let products: ProductType[] = [];
        if (searchTerm !== '') {
          products = await getSearchProduct(categoryName, `?search=${searchTerm}`);
        } else if (minPrice !== '' && maxPrice !== '') {
          products = await getFilterProduct(categoryName, `?min=${minPrice}&max=${maxPrice}`);
        } else {
          products = await getOrderProductByAlphabetical(categoryName, `?order=${sorting}`);
        }
        setData(products);
      }
    };
    fetchData();
  }, [categoryName, searchTerm, minPrice, maxPrice, sorting]);

  const navigate = useNavigate();
  const handleClickToComparison = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    navigate(`/comparison`);
  };

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  const handleFilter = (newMinPrice: number, newMaxPrice: number) => {
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
    setSearchTerm('');
  };

  const handleSort = (newOrder: string) => {
    setSorting(newOrder);
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <>
      <Typography
        sx={{
          width: '100%',
          height: '100px',
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center'
        }}
        variant="h4">
        {categoryName && camelCaseToWords(categoryName)}
      </Typography>
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
      <Box sx={{
        width: '100%',
        minHeight: '500px',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'start'
      }}
      >

        <Box
          sx={{
            width: '80%',
            height: '100%',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            // overflowY: 'auto'
          }}
        >

          {data.map((product) => (
            <CardProduct key={product._id} product={product} />

          ))}
        </Box>
        <NavFilters
          onSearch={handleSearch}
          onFilter={handleFilter}
          onSort={handleSort}
        />
      </Box>
    </>
  );
};

export default CardsProducts;
