import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import authRoutes from "./routes/auth.js";
import securytraxRoute from "./routes/securitytrax.js"
import { register } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";
import path from 'path';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Express React App Route */
const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))

/* ROUTES */
app.post("/api/auth/register", verifyToken, register);

app.use("/api/auth", authRoutes);
app.use("/api/client",verifyToken , clientRoutes);
app.use("/api/general",verifyToken , generalRoutes);
app.use("/api/management",verifyToken , managementRoutes);
app.use("/api/sales",verifyToken,  salesRoutes);

app.use("/api/securitytrax",verifyToken , securytraxRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    
    //Customer.insertMany(dataCustomer);


  })
  .catch((error) => console.log(`${error} did not connect`));