const User = require('./User');
const Job = require('./Job');
const Review = require('./Review');
const Application = require('./Application');

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
});
Job.hasMany(Review, {
    foreignKey: 'job_id',
});

Review.belongsTo(Job, {
    foreignKey: 'job_id',
});


User.hasMany(Job, {
    foreignKey: 'user_id',
});

Job.belongsTo(User, {
    foreignKey: 'user_id',
});


User.belongsToMany(Job, {
    through: Application,
    foreignKey: 'applicant_id',
    as: 'job_entry',
});

Job.belongsToMany(User, {
    through: Application,
    foreignKey: 'job_id',
    as: 'job_applicant',
});


module.exports = {User, Job, Review, Application};



