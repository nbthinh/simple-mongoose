const express = require("express");
const router = express.Router();

// Routes list
router.get("", (req, res) => {
    res.send("Hello world");
});

module.exports = router;