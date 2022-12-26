const express = require("express");
const cors = require("cors");
const knex = require("knex");
const config = require("./knexfile");

const app = express();
const db = knex(config);

app.use(cors());
app.use(express.json());

app.post("/signature", async function (req, res) {
  try {
    await db("user").insert(req.body);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.listen(3001, () => console.log("servidor rodando"));
