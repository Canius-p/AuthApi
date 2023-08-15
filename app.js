const express = require("express");
const app = express();
const port = process.env.port || 4000;
//middle_ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const router = require("./routes/userroutes");
const authController = require("./controller/authController");

app.use("/api/users", router);

// login User
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/loginuser", authController.login);

app.listen(4000, () => {
  // server listen garna lai
  console.log(`Server has started at port ${port}`);
});
