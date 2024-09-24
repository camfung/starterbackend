const express = require("express");
const userController = require("./UserController");
const spotifyController = require("./SpotifyController");
const openAiController = require("./OpenAiController");

const router = express.Router();

// User routes
router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);

// spotify routes
router.get("/spotify-login", spotifyController.spotifyLogin);
router.get("/callback", spotifyController.callback);

module.exports = router;
