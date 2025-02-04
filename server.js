import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from './routes/CategoryRoutes.js'
import productRoutes from './routes/ProductRoutes.js'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";


//resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

//config env
dotenv.config();

//database config
connectDB();

//Rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes);


//Rest api
app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
})

//PORT SETUP
const PORT = process.env.PORT || 8000;

//PORT LISTEN

app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
