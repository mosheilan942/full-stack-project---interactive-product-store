import { Box, Input } from '@mui/material'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <Box sx={{
            width: 1150,
            height: 70,
            background: 'black',
            color: 'gold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <h3 style={{marginLeft: 20}}>All product | Cell Phone | Refrigerators | Washing Machines</h3>
            <Input sx={{background: 'white', padding: '0px 3px'}} placeholder='Search...'/>
        </Box>
    )
}

export default NavBar