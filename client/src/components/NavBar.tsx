import { Box } from '@mui/material'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <Box sx={{
            width: 1150,
            height: 70,
            background: 'black',
            color: 'gold',
            display: 'flex',
            alignItems: 'center'
        }}>
            <h3 style={{marginLeft: 20}}>All product | Cell Phone | Refrigerators | Washing Machines</h3>
        </Box>
    )
}

export default NavBar