import { useState } from 'react';
import Switch2 from './switch2'
import Logo from './logo'
import Logo2 from './logo2'
import UseSwitch from './switch'
import BasicDialog from './dialog'
import ColorBox from './colorBox';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import makeStyles from '@mui/styles/makeStyles'
import Checkbox from '@mui/material/Checkbox';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// styles for card component
const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,

    },
    content: {
        width: '221px',
        
        '&.MuiCardContent-root': {
            padding: 0,
        }
    },
    header: {
        display: 'flex',
        width: '221px',
        height: '66px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F2EBDB',
        color: ({color}) => color == 'biege' ? '#3B755F' : 'white',   
    },
    bigText: {
        
    },
    textbox: {
        margin: '3px'
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#3B755F',
        padding: '2px'
    },
    colorBox: {
       display: 'flex',
       zIndex: 999,
       color: 'grey',
    }, 
}))

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

// color array to be populated 
const colorsArray = ['#2E3A8C', '#3B755F', '#F2EBDB', '#FFFFFF', '#212121'  ]

const BaseCard = ({smallText, bigText, color, colorHex}) => {

    // states to open dialog when info button is clicked
    const [open, setOpen] = useState(false)
    
    const classes = useStyles({color})

    return (
        <Card sx={{ 
            width:'221px', 
            height: '172px', 
            backgroundColor: '#F9F9F9', 
            boxShadow: 0, 
            // marginLeft: '37px', 
            paddingBottom: '36px',
            
            }} 
            className={classes.root}
        >

            { open && <BasicDialog setOpen={setOpen} open={open} /> }

            <CardContent className={classes.content}>
                
                {/* card header */}
                <Box className={classes.header} borderRadius={2}  sx={{ backgroundColor: `${colorHex}`}}>
                    
                    { color == 'biege' ? <Logo /> : <Logo2 /> }
                    
                    <div>
                        <div className={classes.textbox}>
                            <Typography  variant="h6" >{smallText}</Typography>
                        </div>
                        <Typography variant="h4"  className={classes.bigText}>{bigText}</Typography>
                    </div>

                    </Box>
                        {/* first line */}
                        <div className={classes.text}>
                            <Box sx={{ display: 'flex' }} >
                                <Typography variant="h5">Link to Public Profile</Typography>
                                <InfoOutlinedIcon sx={{ fontSize: 11,  }} onClick={ () => setOpen(true) }/>
                            </Box>
                            <Checkbox {...label}  
                                sx={{ 
                                    paddingRight: 0,
                                    '& .MuiSvgIcon-root': { fontSize: 24, color: '#3B755F'} 
                                }} />
                        </div>
                        
                        {/* second line */}
                        <div className={classes.text}>
                            <Typography variant="h5">Badge color</Typography>
                            <div className={classes.colorBox}>
                                { colorsArray.map((color) => <ColorBox color={color}/>)}
                            </div>
                        </div>
                        
                        {/* third line */}
                        <div className={classes.text}>
                            <Typography variant="h5">Link to Public Profile</Typography>
                            <UseSwitch />
                            {/* <Switch2 /> */}
                        </div>
                    <Box>
                </Box>
           </CardContent> 
        </Card>
    )
}

export default BaseCard;