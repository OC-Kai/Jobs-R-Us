const {Review} = require("../models");

const reviewData = [
    {
        review_text: "Great work culture and opportunities for growth! Could pay a bit better.",
        review_rating: 4,
        user_id: 1,
        job_id: 1
    },
    {
        review_text: "Not terrible not great.",
        review_rating: 2,
        user_id: 3,
        job_id: 2
    },
    {
        review_text: "Decent.",
        review_rating: 3,
        user_id: 2,
        job_id: 2
    },
    {
        review_text: "Couldn't be happier!",
        review_rating: 5,
        user_id: 4,
        job_id: 3
    },
    {
        review_text: "Just Awful",
        review_rating: 1,
        user_id: 5,
        job_id: 4
    }
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;