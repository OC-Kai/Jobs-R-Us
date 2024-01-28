const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const {Application, Job, Review, User} = require('../../models');
const { text } = require('body-parser');

router.get('/', async (req, res) => {
    try {
        const review = new Review({
            name: req.body.title_name,
            rating: req.body.review_rating,
            review: req.body.review_text
        });
        await review.post();
        res.json(review);
    } catch (err) {
        res.status(500).json('Could not create review. PLease try again')
    }
});

router.get('/reviews', async (req, res) => {
    try {
        const reviews = await reviews.findAll()
        res.json(reviews)
    } catch (err) {
        res.status(500).json('Could not retrieve reviews. Please try again')
    }
});

router.delete('/reviews', async (req, res) => {
    try{
     const reviews = Review.findbyIDAndRemove(id);
        res.json('Review has been deleted');
    } catch (err) {
        res.json('Could not delete comment. Please try again.')
    }
});

module.exports = router;
