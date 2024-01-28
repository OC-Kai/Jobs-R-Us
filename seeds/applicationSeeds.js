const {Application} = require('../models');

const applicationData = [
    {
        job_id: 1,
        application_text: "Have a great enthusiam for dairy delivery.",
        applicant_id: 2
    },
    {
        job_id: 2,
        application_text: "I applied just to say screw you.",
        applicant_id: 2
    },
    {
        job_id: 3,
        application_text: "Have experience with a fire extinguisher",
        applicant_id: 2
    },
    {
        job_id: 4,
        application_text: "Masters in musical theory and have perfect rhythm",
        applicant_id: 2
    },
    {
        job_id: 5,
        application_text: "Have vanquished several dark lords in the past. Willing to do birthday parties.",
        applicant_id: 2
    },
]

const seedApplications = () => Application.bulkCreate(applicationData);

module.exports = seedApplications;