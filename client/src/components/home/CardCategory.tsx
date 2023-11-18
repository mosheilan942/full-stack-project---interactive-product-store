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
        background: "#bde4a7",
        // width: 200,
        minHeight: 200,
        margin: 2,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        boxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
        WebkitBoxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
        MozBoxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
        borderRadius: '10px'
      }}>

      <img src={category.image} alt={category.name} style={{ width: '100%', height: '30%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
      <Typography sx={{
        background: '#9e6c39',
        borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'
      }}
        variant="h6">
        {camelCaseToWords(category.name)}
      </Typography>

    </Box>
  )
}

export default CardCategory;