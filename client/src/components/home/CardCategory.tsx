import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { camelCaseToWords } from '../../utils/camelCaseToWords';

type Category = {
  _id: string;
  name: string;
  rating: number;
  product: string[];
  image: string;
  __v: number;
}

type Props = {
  category: Category;
}

const CardCategory = (props: Props) => {
  const category = props.category
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate(`/category/${category.name}`);
  };

  return (
    <Box
      onClick={handleBoxClick}
      key={category.name}
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
      }}
        variant="h6">
        {camelCaseToWords(category.name)}
      </Typography>

    </Box>
  )
}

export default CardCategory;