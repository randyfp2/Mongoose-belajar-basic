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

Phone.deleteOne({ _id: "60dec6d1e11aae173c24b815" }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan");
  }
});

// Phone.updateOne(
//   { _id: "60dec6d1e11aae173c24b815" },
//   { name: "Apple iPhone 12" },
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Berhasil simpan");
//     }
//   }
// );
