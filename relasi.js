const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-belajar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PhoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data nama tidak ada, mohon di isi yaa"],
  },
  rating: {
    //validasi data
    type: Number,
    min: 1,
    max: 10,
    required: [true, "Data rating tidak ada, mohon di isi yaa"],
  },
  review: String,
});

const Phone = mongoose.model("Phone", PhoneSchema);

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data nama tidak ada, mohon di isi yaa"],
  },
  age: {
    //validasi data
    type: Number,
    min: 1,
    max: 100,
    required: [true, "Data rating tidak ada, mohon di isi yaa"],
  },
  fav: PhoneSchema,
});

const People = mongoose.model("People", PeopleSchema);
const apple2 = new Phone({
  name: "Apple iPad Pro M1",
  rating: 10,
  review: "Overkill",
});

const Randy = new People({
  name: "Randy",
  age: 23,
  fav: apple2,
});

apple2.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan");
  }
});

Randy.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan Randy relasi dengan ipad");
  }
});
