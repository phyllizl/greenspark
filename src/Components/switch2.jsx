import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    switch: {
        position: 'relative',
        display: 'inline-block',
        width: '60px',
        height: '34px',
        opacity: 0,
        width: 0,
        height: 0,
    }, 
    slider: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ccc',
        WebkitTransition: '0.4s',
        transition: '0.4s',

        '.slider:before': {
            position: 'absolute',
            content: '',
            height: '26px',
            width: '26px',
            left: '4px',
            bottom: '4px',
            backgroundColor: 'white',
            WebkitTransition: '0.4s',
            transition: '0.4s'
        },

        'input:checked + .slider': {
            backgroundColor: '#2196F3'
        },

        'input:focus + .slider': {
            boxShadow: '0 0 1px #2196F3',
        },

        'input:checked + .slider:before': {
            webkitTransform: 'translateX(26px)',
            transform: 'translateX(26px)'
          }
    }
}))

const Switch2 = () => {
    const classes = useStyles()
    return (
        <>
        <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
        </label>
        </>
    )
}

export default Switch2;