import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Category = {
  id: number;
  name: string; 
  image: string;
}

type Props = {
  category: Category;
}

const CardCategory = (props: Props) => {
  const category = props.category
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <Box
      onClick={handleBoxClick}
      key={category.id}
      sx={{
        background: "#ffe3b8",
        width: 200,
        minHeight: 250,
        margin: 2,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column'
      }}>

      <img src={category.image} alt={category.name} style={{ width: '100%', height: '30%' }} />
      <Typography sx={{
        background: '#d55d31',
        marginTop: 3
      }} variant="h6">{category.name}</Typography>

    </Box>
  )
}

export default CardCategory;
