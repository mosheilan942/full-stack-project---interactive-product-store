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
        background: 'white',
        width: '350px',
        minHeight: '300px',
        margin: 2,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '3px solid orange',
        boxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
        WebkitBoxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
        MozBoxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
        borderRadius: '10px'
      }}>

<img
        src="https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/https://www.payngo.co.il/media/catalog/product/e/w/ewm7105_1_1.jpg/w_700,h_700,r_contain"
        // src={category.image}
        alt={category.name}
        style={{
          width: '250px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px'
        }}
      />
      <Typography sx={{
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
      }}
        variant="h6">
        {camelCaseToWords(category.name)}
      </Typography>

    </Box>
  )
}

export default CardCategory;