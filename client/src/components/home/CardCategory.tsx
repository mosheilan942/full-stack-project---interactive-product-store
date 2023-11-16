import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { camelCaseToWords } from '../../utils/camelCaseToWords';
import { v4 as uuidv4 } from 'uuid';
import { CategoryType } from '../../types/ProductTypes';


type Props = {
  category: CategoryType;
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
      key={uuidv4()}
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