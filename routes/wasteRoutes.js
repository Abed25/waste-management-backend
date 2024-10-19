const express = require("express");
const db = require("../db/db");
const router = express.Router();

// Example: Fetch all waste data
router.get("/", (req, res) => {
  const query = "SELECT * FROM waste_records";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
