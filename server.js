const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let schedule = [
  { id: 1, location: "Nairobi", date: "2024-10-15" },
  { id: 2, location: "Mombasa", date: "2024-10-16" },
];

let centers = [
  { id: 1, name: "Center 1", address: "123 Nairobi St" },
  { id: 2, name: "Center 2", address: "456 Mombasa Ave" },
];

// Waste Collection Schedule
app.get("/api/schedule", (req, res) => {
  res.json(schedule);
});

// Recycling Centers
app.get("/api/centers", (req, res) => {
  res.json(centers);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
