import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Typography,
    Card,
    CardContent,
} 
from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

  export default function JobCard(props) {
    const classes = useStyles();

    return (
      <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
              </Typography>
              <Typography>
                  {props.company}
              </Typography>
              <Typography>
                  {props.link}
              </Typography>
          </CardContent>
      </Card>
    )
  }