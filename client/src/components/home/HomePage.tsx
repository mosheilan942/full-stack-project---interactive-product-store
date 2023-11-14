import { Box, Typography } from '@mui/material';
import CardCategory from './CardCategory';



// רשימת קטגוריות
const categoriesData = [
    {
        id: 1,
        name: "Cell Phone",
        image: "https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        name: "Refrigerators",
        image: "https://media.istockphoto.com/id/842160124/photo/refrigerator-with-fruits-and-vegetables.webp?s=1024x1024&w=is&k=20&c=EyLsx0KNKvsVYSK0_7dkTmjtTwJVFfpQXqU1cs1MgsQ="
    },
    {
        id: 3,
        name: 'Washing Machines',
        image: "https://images.pexels.com/photos/4700383/pexels-photo-4700383.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
];

const HomePage = () => {

    return (
        <>
            <Box sx={{
                width: 1150,
                height: 100,
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant='h3'>All categores</Typography>
            </Box>

            {categoriesData.map((category) => (
                <CardCategory key={category.id} category={category} />
            ))}
        </>
    )
}

export default HomePage;
