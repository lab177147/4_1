"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle/:r", (req, res) => {
  const r = Number(req.params.r);

  // check for required parameters
  if (isNaN(r)) {
    return res.status(400).send("Parameter 'r' must be a number");
  }
  const area = Math.PI * r * r;
  const circumference = Math.PI * 2 * r;

  const result = {
    area: area,
    circumference: circumference,
  };
  res.type("text").send(result);
});

//TODO2

//TODO3

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
