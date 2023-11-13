import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import CardProduct from '../components/cardProduct/CardProduct';
import ProductCategory from '../components/ProductCategory';
import CellPhone from '../types/cellPhone';
import Refrigerator from '../types/refrigerators';
import WashingMachine from '../types/washingMachines';
import cellPhones from '../data/cellPhoneData';
import refrigerators from '../data/refrigeratorData';
import washingMachines from '../data/WashingMachineData';
import NavBar from '../components/NavBar';

const HomePage = () => {
    const [cellPhoneData, setCellPhoneData] = useState<CellPhone[]>([]);
    const [refrigeratorData, setRefrigeratorData] = useState<Refrigerator[]>([]);
    const [washingMachineData, setWashingMachineData] = useState<WashingMachine[]>([]);

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

    return (
        <>
            <NavBar/>
            <ProductCategory title="Cell Phones" products={cellPhoneData} />
            <ProductCategory title="Refrigerators" products={refrigeratorData} />
            <ProductCategory title="Washing Machines" products={washingMachineData} />
        </>
    );
};

export default HomePage;
