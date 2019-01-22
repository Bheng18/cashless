let express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const indexRoutes = require("./server/routes/indexRoutes");
const myWallet = require("./server/routes/myWallet");
//const buytokenRoutes = require("./server/routes/buytokenRoutes");
const signupRoutes = require("./server/routes/signupRoutes");
const loginRoutes = require("./server/routes/loginRoutes");
const balanceRoute = require("./server/routes/balanceRoute");
const transactionRoute = require("./server/routes/transactionRoute");
const scanRoute = require("./server/routes/scanRoute");
const usersRoutes = require("./server/routes/usersRoutes");
const editUserRoutes = require("./server/routes/editUserRoutes");
const editUserFormRoutes = require("./server/routes/editUserFormRoutes");
const deleteUserRoutes = require("./server/routes/deleteUserRoutes");

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "server/views"));
app.set("view engine", "pug");

app.use("/", indexRoutes);
app.use("/myWallet", myWallet);
//app.use("/buytoken", buytokenRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);
app.use("/balance", balanceRoute);
app.use("/transaction", transactionRoute);
app.use("/scan", scanRoute);
app.use("/users", usersRoutes);
app.use("/editUser", editUserRoutes);
app.use("/editUserForm", editUserFormRoutes);
app.use("/deleteUser", deleteUserRoutes);

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening to port: ${port}`);
});