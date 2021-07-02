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

const apple = new Phone({
  name: "Apple iPhone 11",
  rating: 10,
  review: "Simple untuk digunakan, Tidak lemot",
});
// const xiaomi = new Phone({
//   name: "Xiaomi Redmi Note 8 Pro",
//   rating: 7,
//   review: "Hp yang sangat wort it dengan harganya",
// });

// const samsung = new Phone({
//   name: "Samsung S21",
//   rating: 10,
//   review: "Gaada Ampun nih hp",
// });

// const google = new Phone({
//   name: "Google Pixel 5 ",
//   rating: 10,
//   review: "Gokil",
// });

// const oppo = new Phone({
//   name: "Oppo Reno 5",
//   rating: 6,
//   review: "Kameranya bagus",
// });

// Phone.insertMany([xiaomi, samsung, google, oppo], function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     mongoose.connection.close();
//     console.log("Berhasil simpan");
//   }
// });

apple.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan");
  }
});
