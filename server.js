const express = require("express");
const path = require("path");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "http://localhost:4200" }));

const subscriptions = require("./server/routes/subscriptions");

app.use(express.static(path.join(__dirname, "dist")));
app.use("/subscriptions", subscriptions);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/wireless-logic-test/index.html"));
});

const port = process.env.PORT || 4600;

app.listen(port, () => {
  console.warn(`Running: ${port}`);
});
