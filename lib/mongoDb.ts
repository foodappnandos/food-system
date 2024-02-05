import mongoose from "mongoose";

const MONGODB_URI =
  // "mongodb+srv://muhabatkhan03:l2qmhyIRnlSARCcn@cluster0.zgfk9hg.mongodb.net/";
  "mongodb+srv://foodappnandos:jXgOOwSHuIxAwRst@cluster0.ivh1kz4.mongodb.net/";
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongooDb");
  })
  .catch((err) => {
    console.log(err.message);
    console.log("error connecting to MongooDb");
  });
