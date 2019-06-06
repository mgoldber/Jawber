const express = require('express');
const router = express.Router();

const JobModel = require('./jobModel'); 
const jobService = require('./jobService');

// GET /jobs/
router.route('/')
    .get(async (req, res, next) => {
        try {
            const jobs = await jobService.listJobs();
            res.status(200).send({
                data: jobs
            });

        } catch (e) {
            next(e);
        }
    });

router.route('/add')
    .post(async (req, res, next) => {
        const { title, company, link } = req.body;
        try {
            const job = new JobModel({ title, company, link });
            const doc = await job.save(); 
            
            res.status(201).json({
                data: [doc]
            });
        } catch (e) {
            next(e);
        }
    });

exports.router = router;