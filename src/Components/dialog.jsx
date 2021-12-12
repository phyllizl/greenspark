import makeStyles from '@mui/styles/makeStyles'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: '248px'
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: '#3B755F',

        '&.MuiDialogActions-root': {
            justifyContent: 'center',
            paddingBottom: '20px',
        }
    }
}))

const BasicDialog = ( { setOpen, open } ) => {
    const classes = useStyles()

    return (
        <Dialog onBackdropClick={ () => setOpen(false) } open={open} >
            <DialogContent className={classes.root}>

            This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it. 

            </DialogContent>
            <DialogActions className={classes.actions}>
                View Public Profile
            </DialogActions>
        </Dialog>
    )
}

export default BasicDialog;