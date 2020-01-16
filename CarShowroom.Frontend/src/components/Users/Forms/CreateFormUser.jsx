import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const CreateFormUser = ({ onSubmit, handleClose }) => (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <DialogContent className="input-group-modal">
                    <div>
                        <label>ФИО:</label>
                        <Field required name="fullName" component="input" type="text" />
                    </div>
                    <div>
                        <label>Дата рождения:</label>
                        <Field required name="birthday" component="input" type="text" />
                    </div>
                    <div>
                        <label>Адрес:</label>
                        <Field required name="address" component="input" type="text" />
                    </div>
                    <div>
                        <label>Электронная почта:</label>
                        <Field name="email" component="input" type="text" />
                    </div>
                    <div>
                        <label>Номер телефона:</label>
                        <Field required name="phone" component="input" type="text" />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="primary">
                        Добавить пользователя
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Отменить
                    </Button>
                </DialogActions>
            </form>
        )}
    />
);

CreateFormUser.propTypes = {
    onSubmit: PropTypes.func,
    handleClose: PropTypes.func
};

export default CreateFormUser;
