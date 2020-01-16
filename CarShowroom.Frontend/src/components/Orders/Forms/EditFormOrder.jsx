import React from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from "@material-ui/core/Typography";

const EditFormOrder = ({ onSubmit, handleClose, initialValues }) => (
    <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <DialogContent className="input-group-modal">
                    <div>
                        <label>Общая стоимость:</label>
                        <Field required name="totalCost" component="input" type="text" />
                    </div>
                    <div>
                        <label>Дата оформления:</label>
                        <Field required name="dateTimeOrder" component="input" type="text" />
                    </div>
                    <div>
                        <label>Нужен ли тест драйв:</label>
                        <Field required name="testDrive" component="input" type="text" />
                    </div>
                    <div>
                        <label>Статус заказа:</label>
                        <Field name="currentStatus" component="input" type="text" />
                    </div>
                    <div>
                        <label>ФИО покупателя:</label>
                        <Field name="fullNameClient" component="input" type="text" />
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

export default EditFormOrder;
