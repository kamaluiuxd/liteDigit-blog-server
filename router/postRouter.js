const express = require("express");

const postRouter = express.Router();

const posts = require("../modules/postModule");

postRouter.get("/get", posts.getPosts);
postRouter.post("/create", posts.createPosts);
postRouter.put("/update/:id", posts.updatePosts);
postRouter.delete("/delete/:id", posts.deletePosts);

module.exports = postRouter;
