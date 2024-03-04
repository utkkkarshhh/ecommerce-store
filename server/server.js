const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes/authRoutes");

const app = express();
const port = process.env.PORT || 8972;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`App live on port ${port}`);
});
