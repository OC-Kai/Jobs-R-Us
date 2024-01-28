const {User} = require("../models");

const userData = [
    {
        first_name: "John",
        last_name: "Smith",
        email: "johnsmith@example.com",
        password: "hispassword"
    },
    {
        first_name: "Jane",
        last_name: "Doe",
        email: "janedoe@example.com",
        password: "herpassword"
    },
    {
        first_name: "Mike",
        last_name: "Trout",
        email: "miketrout@example.com",
        password: "mikespassword"
    },
    {
        first_name: "Harry",
        last_name: "Potter",
        email: "harrypotter@example.com",
        password: "harryspassword"
    },
    {
        first_name: "Elvis",
        last_name: "Presley",
        email: "elvispresley@example.com",
        password: "kingofrock"
    }

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;