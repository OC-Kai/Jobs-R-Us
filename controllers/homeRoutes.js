const router = require('express').Router();
const { User, Application, Job, Review } = require('../models');
const withAuth = require('../utils/auth');

//brings user to homepage
router.get('/', (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        console.error('Error rendering homepage:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//fetches job data brings user to dashboard
router.get('/dashboard', async (req, res) => {
    try {
        const dbJobData = await Job.findAll();
        const jobs = dbJobData.map((job) =>
            job.get({ plain: true })
        );
        res.render('dashboard', {
            jobs,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.error('Error rendering dashboard:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//brings user to login page
router.get('/login', (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        console.error('Error rendering login page:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  //go to user profile
  router.get('/profile', async (req, res) => {
    try {
        //fetch user data based on the logged-in user
        const userData = await User.findByPk(req.session.user_id, {
            //includes applied jobs and posted reviews
            include: [{ model: Job, as: 'job_entry' }, { model: Review }],
        });

        res.render('profile', {
            user: userData.get({ plain: true }),
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.error('Error rendering user profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;