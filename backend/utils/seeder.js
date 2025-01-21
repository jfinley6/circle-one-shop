const Disc = require("../models/disc");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const discs = require("../data/discs.json");

// Setting dotenv file
dotenv.config({ path: "./backend/config/config.env" });

connectDatabase();

const seedDiscs = async () => {
    try {
        await Disc.deleteMany();
        console.log("Discs are deleted");

        await Disc.insertMany(discs);
        console.log("Discs have been seeded");

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};

seedDiscs();
