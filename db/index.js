const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://ambright:FUWikikD123@blog-app.it1bro2.mongodb.net/")
  .then(() => console.log("Connected to mongo db"))
  .catch((e) => console.log(e));
