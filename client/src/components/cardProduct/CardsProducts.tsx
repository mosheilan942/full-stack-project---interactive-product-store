import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import CardProduct from './CardProduct';
import { useParams } from 'react-router-dom';
import { CellPhoneType } from '../../types/ProductTypes';
import { RefrigeratorType } from '../../types/ProductTypes';
import { WashingMachineType } from '../../types/ProductTypes';
import { getProductByCategory } from '../../api/productFuncApi';
import NavBar from '../NavBar';

type ProductType = CellPhoneType | RefrigeratorType | WashingMachineType;

const CardsProducts = () => {
  const { categoryName } = useParams();

  const [data, setData] = useState<ProductType[]>([]);



  useEffect(() => {
    const insertData = async () => {
      const getData = await getProductByCategory(categoryName!)
      setData(getData);
    }

    insertData()
  }, []);


  const allData = [
    {
      categoryName: "cellPhone",
      name: "Cell Phone"
    },
    {
      categoryName: "refrigerator",
      name: "Refrigerators"
    },
    {
      categoryName: 'washingMachine',
      name: 'Washing Machines'
    }
  ]

  const nameView = allData.find((category) => category.categoryName === categoryName)

  return (
    <>
      <NavBar />
      <Box sx={{
        width: 1150,
        height: 100,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Typography variant="h4">{`Category: ${nameView?.name}`}</Typography>
      </Box>
      {data.map((product) => (
        <CardProduct key={product._id} product={product} />
      ))}
    </>
  );
};

export default CardsProducts;


