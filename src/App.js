import BaseCard from './Components/card'
import data from './Components/data.js'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import makeStyles from '@mui/styles/makeStyles'

// styles
const useStyles = makeStyles(theme => ({
  // largest div containing all others 
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // paper is a div from mui. This contains widgets
  paper: {
    '&.MuiPaper-root' : {
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      }
    }
  },
  // header for paper
  text: {
    '&.MuiTypography-root': {
      fontWeight: 600,
      fontSize: '2rem'
    }
  },
  // root div that contains the cards
  root: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
      width: '100%',

      [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap',
        justifyContent: 'center'
      }

  },
  // line under header
  line: {
    width: '100%'
  }
}))

function App() {

  const classes = useStyles();

  return (

    // flex box to center elements within
    <div className={classes.base}>
      <div className={classes.container}>

        {/* paper to hold product widgets */}
        <Paper sx={{
          elevation: 3, 
          width: '851px', 
          // height: '419px', 
          backgroundColor: '#F9F9F9',
          padding: '36px',
          marginTop: '37px', 
        }} 
        className={classes.paper}
        >
          {/* header and line below header */}
          <div>
            <Typography className={classes.text} >Per product widgets</Typography>
          </div>
          <hr className={classes.line}></hr>

           {/* map through products to create widgets */}
          <div className={classes.root}>
            { data.map( ( { smallText, bigText, color, colorHex } ) => <BaseCard smallText={smallText} bigText={bigText} color={color} colorHex={colorHex}/> ) }
          </div>

        </Paper>
      </div>
    </div>

  );
}

export default App;
