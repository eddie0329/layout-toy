const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

// Middlewares
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    ranking: [
      { placement: 1, name: "eddie" },
      { placement: 2, name: "sam" },
      { placement: 3, name: "chris" },
      { placement: 4, name: "jake" },
    ],
  });
});

// Port running
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT ${PORT}`);
});
