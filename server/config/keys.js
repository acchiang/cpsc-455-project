require('dotenv').config();

module.exports = {
    mongoURI: "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.dvh8w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    secretOrKey: "secret"
  };