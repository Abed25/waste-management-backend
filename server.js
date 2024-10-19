const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const wasteRoutes = require("./routes/wasteRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/waste", wasteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
