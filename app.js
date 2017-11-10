const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000;

app.use(express.static("src"));

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/src/index.html"))
);

app.post("/edad", (req, res) => {
  const age = parseInt(req.body["number-input"]);

  if (typeof age === "number" && age >= 18) {
    res.redirect("/ingresa-tus-datos.html");
  } else {
    res.redirect(500, "/edad.html");
  }
});

app.post("/camera", (req, res) => {
  const categoryValue = req.body.category;

  res.render('camera', { category: categoryValue})
});

app.get("/camera", (req, res) => {
  res.render('camera', { category: 'Personal'})
  console.log('get')
})

app.get('/editor', (req, res) => {
  res.render('editor')
})

app.listen(port, () =>
  console.log(`Our App is running on http://localhost:${port}`)
);
