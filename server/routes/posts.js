const express = require('express')
const router = express.Router()
const { posts } =require("../models");

router.get('/',(req, res)=>{
    res.json("Hello world");
});

router.post("/", async (req, res)=>{
   const post = req.body;
  await posts.create(post);
  res.json(post);
})
module.exports = router;