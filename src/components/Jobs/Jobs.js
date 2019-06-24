import React, { useState, useEffect } from 'react';
import JobForm from '../JobForm';
import JobCard from '../JobCard';
import axios from 'axios';
import shark from '../../assets/shark-jaws.png';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container,
    Typography,
    CssBaseline,
    Grid
} 
from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heroText: {
    color: 'white',
    mixBlendMode: 'difference',
    fontWeight: 'bold',
    fontSize: '60px'
  },
  heroSub: {
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  shark: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      position: 'absolute',
      top: '0',
      width: '300px',
    }
  },
}));

export default function Jobs() {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);

  const addJob = (title, company, link) => {
    const newJob = [...jobs, { title, company, link }];
    setJobs(newJob);
  }

  useEffect(() => {
    const jobData = axios.get('http://localhost:3000/api/jobs');
    jobData.then(results => {
      setJobs(results.data.data)
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.shark}>
          <img src={shark} alt="Jaws Shark"/>
        </div>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className={classes.heroText} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              JAWBER
            </Typography>
            <Typography className={classes.heroSub} variant="h5" align="center" color="textSecondary" paragraph>
              THE HUNT BEGINS
            </Typography>
            <JobForm addJob={addJob}/>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {jobs && jobs.map(job => (
              <Grid item key={job._id} xs={12} sm={6} md={4}>
                <JobCard title={job.title} company={job.company} link={job.link}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}