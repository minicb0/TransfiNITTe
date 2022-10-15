const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost/Cplace");
}
main()
  .then(() => {
    console.log("Connected to mongoose locally");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose.connection;
