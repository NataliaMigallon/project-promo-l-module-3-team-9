const express = require("express");
const cors = require("cors");
const { request } = require("express");
const path = require("path");
const Database = require("better-sqlite3");

const app = express();

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.set("view engine", "ejs");

const serverPort = process.env.PORT || 3001;
app.listen(serverPort, () => {});

const staticServerPath = "./public";
app.use(express.static(staticServerPath));

const db = new Database("./src/data/cards.db", {
  verbose: console.log,
});

app.get("/card/:id", (req, res) => {
  const query = db.prepare("SELECT * FROM cards WHERE id = ?");
  const data = query.get(req.params.id);

  res.render("pages/card", data);
});

app.post("/card", (req, res) => {
  const response = {};

  for (let item in req.body) {
    if (!item) {
      (response.success = false),
        (response.error = `Missing ${item} parameter`);
    } else {
      const query = db.prepare(
        "INSERT INTO cards (name, job, photo, phone, email, linkedin, github, palette) VALUES (?,?,?,?,?,?,?,?)"
      );
      const result = query.run(
        req.body.name,
        req.body.job,
        req.body.photo,
        req.body.phone,
        req.body.email,
        req.body.linkedin,
        req.body.github,
        req.body.palette
      );
      response.success = true;
      if (req.host === "localhost") {
        response.cardURL =
          "http://localhost:3001/card/" + result.lastInsertRowid;
      } else {
        response.cardURL =
          "https://delicious-profile-card.herokuapp.com/card/" +
          result.lastInsertRowid;
      }
    }
  }
  res.json(response);
});
