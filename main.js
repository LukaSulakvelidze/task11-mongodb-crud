const express = require("express");
const app = express();
const dbConnect = require("./db/mongoDB");
const postsRouter = require("./Routes/postsRoute");

dbConnect();
app.use(express.json());
app.use("/mongo", postsRouter);

app.get("/", (_, res) => {
  res.send("Hello World!!");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
