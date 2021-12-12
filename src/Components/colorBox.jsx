import { useState } from 'react'
import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    coloured: {
        color: 'grey',
        borderStyle: 'solid',
        borderWidth: '1px',
        '&:hover': {
            backgroundColor:'#2E3A8C'
        }
    },
    hovered: {
        '&:hover': {
            backgroundColor:'#2E3A8C'
        }
    }
}))

const ColorBox = ({color}) => {

    const classes = useStyles()
    const [active, setActive] = useState(false)

    return (
        <Box 
            sx= {{ 
                bgcolor: `${color}`, 
                width: '16px', 
                height: '16px', 
                margin: '2px',
                
            }} 
            onClick={() => setActive(!active)}
            className={active ? `${classes.coloured}` : `${classes.hovered}`}
        />
    )
}

export default ColorBox;