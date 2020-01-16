import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: 20,
        marginTop: 50,
    },
    media: {
        height: 0,
    },
    fab: {
        width: 35,
        height: 35,
        margin: 5
    }
});

const ListItemUser = ({id,
                         fullName,
                         birthday,
                         address,
                         email,
                         phone,
                         handleClickEditOpen,
                         onDeleted,
                         handleClickOpenMore}) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardActionArea>
                {/*<CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                />*/}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {fullName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {birthday}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {phone}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Fab
                    aria-label="Edit"
                    className={classes.fab}
                    onClick={handleClickEditOpen}
                >
                    <EditIcon />
                </Fab>
                <Fab aria-label="Delete" className={classes.fab} onClick={onDeleted}>
                    <DeleteIcon />
                </Fab>
                <Button size="small" color="primary" onClick={handleClickOpenMore}>
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    )
}
export default ListItemUser;
