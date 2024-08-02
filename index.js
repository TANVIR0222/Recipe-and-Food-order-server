const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cors());


async function main() {
  await mongoose.connect(
    process.env.MONGODB
  );

  app.get("/", (req, res) => {
    res.send("Hello Server");
  });
}

// router 

const itemRoute = require('./src/Routes/itemRoute.js');

app.use('/api', itemRoute)

main().then(()=>
    console.log('mongoDb')
).catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

