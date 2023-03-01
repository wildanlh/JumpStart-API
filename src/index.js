import express from "express";

const app = express();

app.listen(3000, () => {
  console.info("Server started on port 3000");
});
