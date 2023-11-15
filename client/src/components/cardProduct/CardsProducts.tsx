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

type GetProds = {
    _id: string;
    name: string;
    rating: number;
    product: ProductType[];
    image: string;
    __v: number;
  }



const CardsProducts = () => {
  const { categoryName } = useParams();

  const [data, setData] = useState<ProductType[]>([]);

  

  useEffect(() => {
    const insertData = async () => {
      if (categoryName) {
        const getData: GetProds = await getProductByCategory(categoryName);
        const products = getData && getData.product;

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


  type AllData = {
    categoryName: string;
    name: string;
  }


  const allData: AllData[] = [
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

  const nameView: AllData | undefined = allData.find((category) => category.categoryName === categoryName)

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

        <Typography variant="h4">{nameView && nameView.name}</Typography>
      </Box>
      {data.map((product) => (
        <CardProduct key={product._id} product={product}/>
      ))}
    </>
  );
};

export default CardsProducts;


