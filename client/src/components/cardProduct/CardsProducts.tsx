import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import CardProduct from './CardProduct';
import { camelCaseToWords } from '../../utils/camelCaseToWords';
import { CategoryType, ProductType } from '../../types/ProductTypes';
import { getFilterProduct, getOrderProductByAlphabetical, getProductByCategory, getSearchProduct } from '../../api/productFuncApi';
import { useParams } from 'react-router-dom';
import NavFilters from './NavFilters';


const CardsProducts = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState<ProductType[]>([]);


  useEffect(() => {
    const insertData = async () => {
      if (categoryName) {
        const getData: CategoryType = await getProductByCategory(categoryName);
        const products: ProductType[] | undefined = getData && getData.product;

        if (Array.isArray(products)) {
          setData(products);
        } else {
          console.log(products);

          console.error("Data received is not an array:", products);
        }
      }
    };

    insertData()
  }, []);


  const fetchDataSearch = async (queryParams: string) => {
    try {
      if (!categoryName) throw Error('Not exist categort name!!')
      const data: ProductType[] = await getSearchProduct(categoryName, queryParams);
      setData(data);
      console.log(data);

    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };


  const fetchDataFilter = async (queryParams: string) => {
    try {
      if (!categoryName) throw Error('Not exist categort name!!')
      const data: ProductType[] = await getFilterProduct(categoryName, queryParams);
      setData(data);
      console.log(data);

    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchDataFilterByAlphabetical = async (queryParams: string) => {
    try {
      if (!categoryName) throw Error('Not exist categort name!!')
      const data: ProductType[] = await getOrderProductByAlphabetical(categoryName, queryParams);
      setData(data);
      console.log(data);

    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };


  const handleSearch = (newSearchTerm: string) => {
    fetchDataSearch(`?search=${newSearchTerm}`);
  };

  const handleFilter = (newMinPrice: number, newMaxPrice: number) => {
    fetchDataFilter(`?min=${newMinPrice}&max=${newMaxPrice}`);
  };

  const handleSort = (newOrder: string) => {
    fetchDataFilterByAlphabetical(`?order=${newOrder}`);
  };

  return (
    <>
      <NavFilters
        onSearch={handleSearch}
        onFilter={handleFilter}
        onSort={handleSort}
        
      />
      <Box
        sx={{
          width: '100%',
          height: 70,
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4">{categoryName && camelCaseToWords(categoryName)}</Typography>
      </Box>
      {data.map((product) => (
        <CardProduct key={product._id} product={product} />
      ))}
    </>
  );
};

export default CardsProducts;




