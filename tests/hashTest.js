const crypto = require("crypto");

const password = "Password123!";

const hash = crypto
  .createHash("sha256")
  .update(password)
  .digest("hex");

console.log(hash);