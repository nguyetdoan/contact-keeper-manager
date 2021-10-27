const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

// Connect Database
connectDB();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact keeper API..." })
);

app.use(express.json({ extended: false }));
// Define Routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFild(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
