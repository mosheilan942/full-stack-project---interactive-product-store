import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import CardProduct from './CardProduct';
import { useParams } from 'react-router-dom';
import { CellPhoneType } from '../../types/ProductTypes';
import { RefrigeratorType } from '../../types/ProductTypes';
import { WashingMachineType } from '../../types/ProductTypes';
import { productData } from '../../data/alldata';

type ProductType = CellPhoneType | RefrigeratorType | WashingMachineType;

const CardsProducts = () => {
  const { categoryIdFP } = useParams();

  const [data, setData] = useState<ProductType[]>([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setCellPhoneData(await fetchCellPhoneData());
  //       setRefrigeratorData(await fetchRefrigeratorData());
  //       setWashingMachineData(await fetchWashingMachineData());
  //     };

  //     fetchData();
  //   }, []);


  useEffect(() => {
    setData(productData);
  }, []);


  const allData = [
    {
      categoryId: 1,
      name: "Cell Phone",
      data: data
    },
    {
      categoryId: 2,
      name: "Refrigerators",
      data: data
    },
    {
      categoryId: 3,
      name: 'Washing Machines',
      data: data
    }
  ]


  const filteredProducts = allData.find((product) => product.categoryId === parseInt(categoryIdFP!));

  return (
    <>
      <Box sx={{
        width: 1150,
        height: 100,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography variant="h4">{`Category: ${filteredProducts?.name}`}</Typography>
      </Box>
      {filteredProducts?.data.map((product) => (
        <CardProduct key={product._id} product={product} />
      ))}
    </>
  );
};

export default CardsProducts;


