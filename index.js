const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000;
dotenv.config();


async function main() {
  await mongoose.connect(
    process.env.MONGODB
  );

  app.get("/", (req, res) => {
    res.send("Hello Server");
  });
}

main().then(()=>
    console.log('mongoDb')
).catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// yO6IQ6GsqOELzR9S tanvirislam3912
