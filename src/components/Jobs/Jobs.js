import React, { useState, useEffect } from 'react';
import JobForm from '../JobForm';
import JobCard from '../JobCard';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container,
    Typography,
    CssBaseline,
    Grid
} 
from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Jobs() {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobData = axios.get('http://localhost:3000/api/jobs');
    jobData.then(results => {
      console.log(results.data.data);
      setJobs(results.data.data)
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              JOBBY
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Jobs, jobs, we love jobs. Can't wait to apply to all the jobs, and land a job.
            </Typography>
            <JobForm />
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