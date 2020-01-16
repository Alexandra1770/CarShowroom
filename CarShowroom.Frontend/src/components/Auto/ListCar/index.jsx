import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ListItemCar from "../ListItemCar";

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        marginTop: 50,
        marginLeft: 50,
    },
});

const ListCar = ({ data, onDeleted, handleClickEditOpen, handleClickOpenMore }) => {
    const classes = useStyles();
    return (
        data.map(cars => (
            <Card key={cars.registryNumber} className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {cars.brand}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.manufacturer}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.automaticTransmission}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.registryNumber}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.doorsNumber}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.fuel}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.color}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.enginePower}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.fuelConsumption}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.seatsNumber}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cars.year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => handleClickOpenMore(cars.registryNumber)}>
                        Learn More
                    </Button>
                    <Button size="small" color="primary" onClick={() => onDeleted(cars.registryNumber)}>
                        Delete
                    </Button>
                    <Button size="small" color="primary" onClick={() => handleClickEditOpen(cars.registryNumber)}>
                        Edit
                    </Button>
                </CardActions>
            </Card>
        ))

    );
};
export default ListCar;
{/*<div>
            {data.map(item => {
                const { registryNumber, ...itemProps } = item;
                return(
                    <>
                        <ListItemCar
                            key={registryNumber}
                            {...itemProps}
                            handleClickEditOpen={() => handleClickEditOpen(registryNumber)}
                            onDeleted={() => onDeleted(registryNumber)}
                            handleClickOpenMore={() => handleClickOpenMore(registryNumber)}

                        />
                    </>
                );
            })}
        </div>*/}
