import cors from "cors";
import express from "express";
import mainRoutes from "./main/index.js";
import adminRoutes from "./admin/index.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://65.1.150.253",
  "https://navonmeshfest.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false); // IMPORTANT: no Error thrown
      }
    },
    credentials: true,
  })
);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));
app.use("/api/uploads", express.static("uploads"));

app.use("/api", mainRoutes);

app.use("/api/admin", adminRoutes);

app.use(errorHandler);

export default app;
