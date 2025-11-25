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
app.get("/math/rectangle/:width/:height", (req, res) => {
  const a = Number(req.params.width);
  const b = Number(req.params.height);

  // check for required parameters
  if (isNaN(a)) {
    return res.status(400).send("Parameter 'a' must be a number");
  }
  if (isNaN(b)) {
    return res.status(400).send("Parameter 'b' must be a number");
  }
  const area = a * b;
  const circumference = 2 * a + 2 * b;

  const result = {
    area: area,
    circumference: circumference,
  };
  res.type("text").send(result);
});

//TODO3
app.get("/math/power/:base/:exponent", (req, res) => {
  const a = Number(req.params.base);
  const b = Number(req.params.exponent);
  const root = req.query.root === "true";

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const power = Math.pow(a, b);
  const response = { power };
  if (root) {
    response.root = Math.sqrt(power);
  }

  res.json(response);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
