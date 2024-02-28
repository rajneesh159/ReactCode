const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require('method-override');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true })); // Add this line to enable body parsing
app.use(methodOverride('_method'))

let posts = [
  {
    id: uuidv4(),
    username: "Rajneesh",
    content: "Get a job in 15 days",
  },
  {
    id: uuidv4(),
    username: "jolly",
    content: "Earn money in any case",
  },
  {
    id: uuidv4(),
    username: "Great",
    content: "Supply and Demand",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.post("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);

  post.content = newContent;
  res.redirect("/posts")
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  res.render("edit.ejs", { post });

});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);

  res.redirect("/posts")
})

app.listen(port, () => {
  console.log("server is listening");
});
