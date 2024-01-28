const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const { Application, Job, Review, User } = require("../../models");
const withAuth = require("../../utils/auth");
const { matchSorter } = require("match-sorter"); // import for the match-sorter package

//Retrieve all jobs
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await sequelize.model("Job").findAll({});
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving jobs" });
  }
});

//Retrieve a single job by ID
router.get("/jobs/:id", async (req, res) => {
  try {
    // Fetch job details based on the job ID from the URL parameter
    const jobData = await Job.findByPk(req.params.id, {
      include: [{ model: Review, include: User }],
    });

    res.render("listing", {
      job: jobData.get({ plain: true }),
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error("Error rendering job details:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//apply to a job
router.get("/:id/application", async (req, res) => {
  try {
    const jobId = req.params.id;
    const jobData = await Job.findByPk(jobId, {
      include: [{ model: User, as: "job_applicant" }],
    });
    res.render("application", {
      job: jobData.get({ plain: true }),
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error("Error rendering application:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// //Create a new job
// router.post('/jobs', async (req, res) => {
//   try {
//     const job = await sequelize.model('Job').create(req.body);
//     res.json(job);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error creating job' });
//   }

// });

// //Update a job
// router.put('/jobs/:id', async (req, res) => {
//   try {
//     const job = await sequelize.model('Job').findById(req.params.id);
//     if (!job) {
//       res.status(404).json({ message: 'Job not found' });
//     } else {
//       job.update(req.body);
//       res.json(job);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error updating job' });
//   }
// });

// //Delete a job
// router.delete('/jobs/:id', async (req, res) => {
//   try {
//     await sequelize.model('Job').destroy({ where: { id: req.params.id } });
//     res.json({ message: 'Job deleted successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error deleting job' });
//   }
// });

// router.get(`/jobs/:${search_term}`, async (req, res) => {
//   try {
//     const jobs = await sequelize.model('Job').findAll();
//     const results = matchSorter(jobs, search_term);
//     res.status(200).json(results);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({message: 'Error'});
//   }
// });

module.exports = router;

/* Rough sketch of match-sorter implementation. https://www.npmjs.com/package/match-sorter?activeTab=readme#usage
So you can take search terms retrieved from the form and pass them into the route.  Use the term to plug
into the match-sorter function.  Super rough, hasty sketched version, so it will need tweaking. */
/* router.get('/jobs/:${search_term}, async (req, res) => {
  try {
    const jobs = await sequelize.model('Job').findAll();
    const results = matchSorter(jobs, search_term);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Error'});
  }
}) */
