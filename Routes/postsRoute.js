const express = require("express");
const { Router } = require("express");
const app = express();
const postsRouter = Router();
const { Get, Post, Put, Delete } = require("./posts.service");

postsRouter.get("/posts", Get);
postsRouter.post("/posts", Post);
postsRouter.delete("/posts/:id", Delete);
postsRouter.put("/posts/:id", Put);

module.exports = postsRouter;
