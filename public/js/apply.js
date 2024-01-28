const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Job = require('../models/job');

router.post('/:jobId', async (req, res) => {
  try {

    const jobId = req.params.jobId;
    const email = req.body.email;
    const coverLetter = req.body.coverLetter;

    const job = await Job.findById(jobId);

    // Check if the job exists
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if the user has already applied for the job
    const userJob = await User.findOne({ email, jobId });
    if (userJob) {
      return res.status(409).json({ message: 'You have already applied for this job' });
    }

    // Create a new application
    const application = new User.application(job, email, coverLetter);

    // Save the application
    await application.save();

    // Return a success message
    return res.json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error submitting application' });
  }
});

module.exports = router;
