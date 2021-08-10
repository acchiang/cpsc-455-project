const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const passport = require("passport");

const users = require("./routes/user-router");
const menuRouter = require("./routes/menu-router");
const sessionRouter = require("./routes/session-router");
const db = require("./db/app.js");
const app = express();
const apiPort = 9000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/menus", menuRouter);
app.use("/session", sessionRouter);


// Code snippet from https://stackoverflow.com/questions/36504768/deploy-the-backend-and-frontend-on-the-same-heroku-app-dyno
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))


app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


app.listen(process.env.PORT || apiPort, () => console.log(`Server running on port ${apiPort}`));

module.exports = app;
