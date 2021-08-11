const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput({name, password}) {
  let error;
  name = !isEmpty(name) ? name : "";
  password = !isEmpty(password) ? password : "";
  // Name checks
  if (Validator.isEmpty(name)) {
    error = "Name field is required";
  }
  // Password checks
  if (password && !Validator.isLength(password, { min: 6, max: 30 })) {
    error = "Password must be at least 6 characters";
  }
  return {
    error,
    isValid: !error
  };
};