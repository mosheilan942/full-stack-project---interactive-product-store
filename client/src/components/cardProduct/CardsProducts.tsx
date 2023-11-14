import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import CardProduct from './CardProduct';
import { useParams } from 'react-router-dom';
import { CellPhoneType } from '../../types/ProductTypes';
import { RefrigeratorType } from '../../types/ProductTypes';
import { WashingMachineType } from '../../types/ProductTypes';
import cellPhones from '../../data/cellPhoneData';
import refrigerators from '../../data/refrigeratorData';
import washingMachines from '../../data/WashingMachineData';



const CardsProducts = () => {
  const { categoryIdFP } = useParams();

  const [cellPhoneData, setCellPhoneData] = useState<CellPhoneType[]>([]);
  const [refrigeratorData, setRefrigeratorData] = useState<RefrigeratorType[]>([]);
  const [washingMachineData, setWashingMachineData] = useState<WashingMachineType[]>([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setCellPhoneData(await fetchCellPhoneData());
  //       setRefrigeratorData(await fetchRefrigeratorData());
  //       setWashingMachineData(await fetchWashingMachineData());
  //     };

  //     fetchData();
  //   }, []);


  useEffect(() => {
    setCellPhoneData(cellPhones);
    setRefrigeratorData(refrigerators);
    setWashingMachineData(washingMachines);
    console.log(cellPhoneData)
  }, []);


  const allData = [
    {
      categoryId: 1,
      name: "Cell Phone",
      data: cellPhoneData
    },
    {
      categoryId: 2,
      name: "Refrigerators",
      data: refrigeratorData
    },
    {
      categoryId: 3,
      name: 'Washing Machines',
      data: washingMachineData
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


