const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_LOCAL_URI, {})
        .then((con) => {
            console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
        })
        .catch((err) => {
            console.error(`Database connection error: ${err.message}`);
            process.exit(1); // Exit the process with a failure
        });
};

module.exports = connectDatabase