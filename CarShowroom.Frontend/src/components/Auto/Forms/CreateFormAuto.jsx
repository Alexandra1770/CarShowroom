import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {CssBaseline, FormControlLabel, Grid, makeStyles, Paper} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
        width: 'fit-content',
    },
    fab: {
        width: 35,
        height: 35,
        margin: 10,
    },
}));

const CreateFormAuto = ({ onSubmit, handleClose, open,handleClickOpen }) => {
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
                                        />
                                    </Grid>
                                    <Grid item xs={10} style={{margin: 10}}>
                                    <Field
                                        fullWidth
                                        required
                                        name="seatsNumber"
                                        component={TextField}
                                        type="text"
                                        label="количество посадочных мест"
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
                                        />
                                    </Grid>
                                    <Grid item style={{margin: 16}}>
                                        <Button
                                            variant="contained"
                                            color="inherit"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Добавить
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

/*({ onSubmit, handleClose }) => (
    <Form
        onSubmit={onSubmit}
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
                        <Field required name="manufacturer" component="input" type="text" />
                    </div>
                    <div>
                        <label>Объем двигателя:</label>
                        <Field name="engineVolume" component="input" type="text" />
                    </div>
                    <div>
                        <label>Мощность двигателя:</label>
                        <Field required name="enginePower" component="input" type="text" />
                    </div>
                    <div>
                        <label>Расход топлива:</label>
                        <Field required name="fuelConsumption" component="input" type="text"
                        />
                    </div>
                    <div>
                        <label>Количество дверей:</label>
                        <Field required name="doorsNumber" component="input" type="text" />
                    </div>
                    <div>
                        <label>Число посадочных мест:</label>
                        <Field required name="seatsNumber" component="input" type="text" />
                    </div>
                    <div>
                        <label>Объем багажника:</label>
                        <Field required name="volumeTrunk" component="input" type="text" />
                    </div>
                    <div>
                        <label>КПП автомат:</label>
                        <Field name="automaticTransmission" component="input" type="text" />
                    </div>
                    <div>
                        <label>Круиз контроль:</label>
                        <Field name="cruiseControl" component="input" type="text" />
                    </div>
                    <div>
                        <label>Топливо:</label>
                        <Field required name="fuel" component="input" type="text" />
                    </div>
                    <div>
                        <label>Наличие кондиционера:</label>
                        <Field name="conditioner" component="input" type="text" />
                    </div>
                    <div>
                        <label>Наличие радио:</label>
                        <Field name="radio" component="input" type="text" />
                    </div>
                    <div>
                        <label>Наличие видео:</label>
                        <Field name="video" component="input" type="text" />
                    </div>
                    <div>
                        <label>GPS навигатор:</label>
                        <Field name="gpsNavigator" component="input" type="text" />
                    </div>
                    <div>
                        <label>Материал обивки:</label>
                        <Field required name="interior" component="input" type="text" />
                    </div>
                    <div>
                        <label>Цвет:</label>
                        <Field required name="color" component="input" type="text" />
                    </div>
                    <div>
                        <label>Пробег:</label>
                        <Field required name="milage" component="input" type="text" />
                    </div>
                    <div>
                        <label>Техосмотр:</label>
                        <Field required name="to" component="input" type="text" />
                    </div>
                    <div>
                        <label>Цена:</label>
                        <Field required name="price" component="input" type="text" />
                    </div>
                    <div>
                        <label>Клиенты проводившие тест драйв:</label>
                        <Field name="client" component="input" type="text" />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="primary">
                        Добавить автомобиль
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Отменить
                    </Button>
                </DialogActions>
            </form>
        )}
    />
);

CreateFormAuto.propTypes = {
    onSubmit: PropTypes.func,
    handleClose: PropTypes.func
};*/

export default CreateFormAuto;
