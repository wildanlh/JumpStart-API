import express from "express";

const app = express();

app.listen(8080, () => {
  console.info("Server started on port 8080");
});
