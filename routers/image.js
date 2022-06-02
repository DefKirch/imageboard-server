const { Router } = require("express");

// Models
const Image = require("../models").image;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const images = await Image.findAll();
    res.send(images);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { imageUrl, title } = req.body;
    const newImage = await Image.create({
      imageUrl,
      title,
    });
    res.send(newImage);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
