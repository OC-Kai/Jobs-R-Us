const sequelize = require("../config/connection");
const seedApplications = require("./applicationSeeds");
const seedJobs = require("./jobSeeds");
const seedUsers = require("./userSeeds");
const seedReviews = require("./reviewSeeds")

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();

    await seedJobs();

    await seedReviews();

    await seedApplications();

    process.exit(0)
};

seedAll();