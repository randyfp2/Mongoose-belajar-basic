const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-belajar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const PhoneSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Phone = mongoose.model("Phone", PhoneSchema);

Phone.find(function (error, phones) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    // console.log(phones);

    phones.forEach(function (phones) {
      console.log(phones.name);
    });
  }
});
