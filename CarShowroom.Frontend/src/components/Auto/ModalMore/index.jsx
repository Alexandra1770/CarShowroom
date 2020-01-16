import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        maxWidth: 500,
        marginLeft: 500,
    },
});

export default function DetailModal ({ isOpen, handleClose, data: { brand, producer, color, price, year, manufacturer } }) {
    const classes = useStyles();

    return(
        <div>
            <Dialog
                className={classes.paper}
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
            >
                <DialogTitle id="alert-dialog-title">{brand} </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Производитель:
                        {producer}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Цвет:
                        {color}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Цена:
                        {price}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Год выпуска:
                        {year}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Мануфактура:
                        {manufacturer}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
