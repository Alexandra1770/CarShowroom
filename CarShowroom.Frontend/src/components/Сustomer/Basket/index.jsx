import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import {
    Grid,
    CssBaseline,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: 'black'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function FullScreenDialog({basket, onSubmit, handleClickDelete, totalCost, handleClose, open}) {
    const classes = useStyles();

    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Корзина
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Form
                    className={classes.paperWidthSm}
                    totalCost={totalCost}
                    basket={basket}
                    onSubmit={onSubmit}
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Paper className={classes.root}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Марка</TableCell>
                                                <TableCell align="right">Производитель</TableCell>
                                                <TableCell align="right">Цена</TableCell>
                                                <TableCell align="right">Количество дверей</TableCell>
                                                <TableCell align="right"> </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {basket.map(row => {
                                                return (
                                                    <TableRow key={row.registryNumber}>
                                                        <TableCell component="th" scope="row">
                                                            {row.brand}
                                                        </TableCell>
                                                        <TableCell align="right">{row.manufacturer}</TableCell>
                                                        <TableCell align="right">{row.price}</TableCell>
                                                        <TableCell align="right">{row.doorsNumber}</TableCell>
                                                        <TableCell >
                                                            <Button variant="contained" onClick={() => handleClickDelete(row.registryNumber)} className={classes.button}>
                                                                удалить из корзины
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </div>
                            <div style={{margin: 10}}>
                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={6}>
                                        <Field
                                            fullWidth
                                            required
                                            name="fullName"
                                            component={TextField}
                                            type="text"
                                            label="ФИО"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            fullWidth
                                            required
                                            name="email"
                                            component={TextField}
                                            type="email"
                                            label="email"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            fullWidth
                                            required
                                            name="address"
                                            component={TextField}
                                            type="text"
                                            label="адрес"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            fullWidth
                                            required
                                            name="phone"
                                            component={TextField}
                                            type="text"
                                            label="телефон"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            fullWidth
                                            required
                                            name="testDrive"
                                            component={TextField}
                                            type="text"
                                            label="нужен ли тест-драйв"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            fullWidth
                                            required
                                            name="currentStatus"
                                            component={TextField}
                                            type="text"
                                            label="текущий статус"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <div style={{fontFamily: "Franklin Gothic Medium",
                                            fontSize: 'large',
                                            color: 'cadetblue',}}>Итоговая стоимость: {totalCost}</div>
                                    </Grid>
                                    <Grid item style={{ marginTop: 16}}>
                                        <Button
                                            variant="contained"
                                            color="inherit"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Оформить заказ
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </form>
                    )}
                />

            </Dialog>
        </div>
    );
}
