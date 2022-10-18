const express = require("express");

const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");

const dotenv = require("dotenv");
const mongo = require("./connect");

dotenv.config();
mongo.connect();

const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
	console.log("Started");
	next();
});

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT);
