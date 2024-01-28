const {Job} = require('../models');

const jobData = [
    {
        job_title: "Milk Deliveryman",
        requirements_text:"Must be physically fit and not allergic to dairy",
        description_text:"You will be the friendly neighborhood milkman, delivering dairy drinks on a set path to the same customers weekly.",
        salary: 30000,
        user_id: 1,

    },
    {
        job_title: "Entry Level Programmer",
        requirements_text:"A Master's degree in computer science from an Ivy League School and 20 years of related experience.",
        description_text:"We are looking for rock stars for our start up tech company. Must be willing to work weekends/overtime.",
        salary: null,
        user_id: 3,

    },
    {
        job_title: "Firefighter",
        requirements_text:"Need to be physically fit and able to be calm in the face of danger.",
        description_text:"You will be an asset to the community and a local hero.",
        salary: 80000,
        user_id: 1,

    },
    {
        job_title: "Drum Player",
        requirements_text:"Must be able to keep a steady beat.",
        description_text:"You will be the new drummer for our band.",
        salary: 65000,
        user_id: 5,

    },
    {
        job_title: "Magician",
        requirements_text:"A degree from Hogwarts is highly desired, but not necessary. No Slytherins need apply.",
        description_text:"Fight the dark lord and entertain children at birthday parties",
        salary: 10,
        user_id: 4,

    },

]

const seedJobs = () => Job.bulkCreate(jobData);

module.exports = seedJobs;