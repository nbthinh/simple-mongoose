const express = require("express");
const router = express.Router();

// Routes list
router.get("", (req, res) => {
    const locals = {
        title: "Nodejs blog",
        description: "Demo"
    }
    res.render("index.ejs", {locals});
});

router.get("/about", (req, res) => {
    res.render("about.ejs");
});

module.exports = router;