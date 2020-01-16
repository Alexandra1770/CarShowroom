import React from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {CssBaseline, Grid, makeStyles, Paper, FormControlLabel} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        margin: 20,
    },
}));

const EditForm = ({ onSubmit, handleClose, initialValues }) => {

    console.log('initialValues ',initialValues );
    const classes = useStyles();

    const [maxWidth] = React.useState('xs');
    const [maxHeight] = React.useState('lg');
    return (
        <React.Fragment>
            <Dialog
                maxWidth={maxWidth}
                maxHeight={maxHeight}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <div>
                    <Form
                        className={classes.form}
                        onSubmit={onSubmit}
                        render={({handleSubmit, submitting}) => (
                            <form onSubmit={handleSubmit}>
                                <Grid container alignItems="flex-start" spacing={0}>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="registryNumber"
                                            component={TextField}
                                            type="text"
                                            label="регистрационный номер"
                                            defaultValue={initialValues.registryNumber}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="brand"
                                            component={TextField}
                                            type="text"
                                            label="марка"
                                            defaultValue={initialValues.brand}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="color"
                                            component={TextField}
                                            type="text"
                                            label="цвет"
                                            defaultValue={initialValues.color}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="manufacturer"
                                            component={TextField}
                                            type="text"
                                            label="производитель"
                                            defaultValue={initialValues.manufacturer}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="automaticTransmission"
                                            component={TextField}
                                            type="text"
                                            label="коробка передач"
                                            defaultValue={initialValues.automaticTransmission}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="price"
                                            component={TextField}
                                            type="text"
                                            label="цена"
                                            defaultValue={initialValues.price}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="year"
                                            component={TextField}
                                            type="text"
                                            label="год выпуска"
                                            defaultValue={initialValues.year}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="doorsNumber"
                                            component={TextField}
                                            type="text"
                                            label="количество дверей"
                                            defaultValue={initialValues.doorsNumber}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="fuel"
                                            component={TextField}
                                            type="text"
                                            label="топливо"
                                            defaultValue={initialValues.fuel}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="enginePower"
                                            component={TextField}
                                            type="text"
                                            label="мощность двигателя"
                                            defaultValue={initialValues.enginePower}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="fuelConsumption"
                                            component={TextField}
                                            type="text"
                                            label="расход топлива"
                                            defaultValue={initialValues.fuelConsumption}
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                        <Field
                                            fullWidth
                                            required
                                            name="seatsNumber"
                                            component={TextField}
                                            type="text"
                                            label="количество посадосных мест"
                                            defaultValue={initialValues.seatsNumber}
                                        />
                                    </Grid>
                                    <Grid item style={{margin: 16}}>
                                        <Button
                                            variant="contained"
                                            color="inherit"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Редактировать
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="inherit"
                                            onClick={handleClose}
                                        >
                                            Отмена
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    />
                </div>

            </Dialog>
        </React.Fragment>
    );
};
/*({ onSubmit, handleClose, initialValues: { registryNumber, brand, producer, color, price, year, manufacturer, automaticTransmission, doorsNumber, fuel,
    enginePower, fuelConsumption, seatsNumber} }) => {
    console.log('initialValues', initialValues)
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ registryNumber, brand, producer, color, price, year, manufacturer, automaticTransmission, doorsNumber, fuel,
                enginePower, fuelConsumption, seatsNumber}}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <DialogContent className="input-group-modal">
                        <div>
                            <label>Регистрационный номер:</label>
                            <Field required name="registryNumber" component="input" type="text" />
                        </div>
                        <div>
                            <label>Марка:</label>
                            <Field required name="brand" component="input" type="text" />
                        </div>
                        <div>
                            <label>Производитель:</label>
                            <Field required name="producer" component="input" type="text" />
                        </div>
                        <div>
                            <label>Цвет:</label>
                            <Field name="color" component="input" type="text" />
                        </div>
                        <div>
                            <label>Цена:</label>
                            <Field required name="price" component="input" type="text" />
                        </div>
                        <div>
                            <label>Год:</label>
                            <Field required name="year" component="input" type="text" />
                        </div>
                        <div>
                            <label>Фабрика:</label>
                            <Field required name="manufacturer" component="input" type="text" />
                        </div>
                        <div>
                            <label>КПП автомат:</label>
                            <Field required name="automaticTransmission" component="input" type="text" />
                        </div>
                        <div>
                            <label>Количество дверей:</label>
                            <Field required name="doorsNumber" component="input" type="text" />
                        </div>
                        <div>
                            <label>Топливо:</label>
                            <Field required name="fuel" component="input" type="text" />
                        </div>
                        <div>
                            <label>enginePower:</label>
                            <Field required name="enginePower" component="input" type="text" />
                        </div>
                        <div>
                            <label>fuelConsumption:</label>
                            <Field required name="fuelConsumption" component="input" type="text" />
                        </div>
                        <div>
                            <label>Количество посадочных мест:</label>
                            <Field required name="seatsNumber" component="input" type="text" />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">
                            Редактировать
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Отменить
                        </Button>
                    </DialogActions>
                </form>
            )}
        />
    );
}*/


export default EditForm;
