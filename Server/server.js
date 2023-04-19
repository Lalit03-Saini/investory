const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnent");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
dbConnect();


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.json());
app.use(cors());

//api's
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
    res.send(`<h1>Hello Wellcome to My First Office Project(in Backend)</h1>`)
})
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});