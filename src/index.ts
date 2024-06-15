import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

// Conexión a la base de datos MongoDB
mongoose.connect("mongodb://localhost:27017/personalized-learning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");

  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
