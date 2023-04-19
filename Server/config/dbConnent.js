const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const dbConnect = () => {
    try {
        const connection = mongoose.connect((process.env.MONGO_URL));
        console.log("Database Connected Successfuly")
    }
    catch (error) {
        console.log("Database error");
    }
};

module.exports = dbConnect;