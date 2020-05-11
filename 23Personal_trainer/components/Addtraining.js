import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ReactTable from 'react-table-v6'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Addtraining(props) {
    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({activity:'', date:'', duration:''});

const handleClickOpen = () => {
    setOpen(true);
}


const handleClose = () => {
    props.addTraining(training);
    setOpen(false);
}

const handleCancel = () => {
    setOpen(false);
}

const inputChanged = (event) => {
    setTraining({...training, [event.target.name]: event.target.value});
}

    return(
        <div>
            <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
                New training
            </Button>
            <Dialog open={open} disableBackdropClick={true} disableEscapeKeyDown={true} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add new training</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="activity"
                name="activity"
                value={training.activity}
                onChange={inputChanged}
                label="Activity"
                fullWidth
            />
            <TextField
                margin="dense"
                id="date"
                name="date"
                value={training.date}
                onChange={inputChanged}
                label="Date"
                fullWidth
            />
            <TextField
                margin="dense"
                id="duration"
                name="duration"
                value={training.duration}
                onChange={inputChanged}
                label="Duration mins"
                fullWidth
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Save
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    )
}