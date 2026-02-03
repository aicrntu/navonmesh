import dotenv from "dotenv";
import app from "./app.js";
import { connctDB } from "./config/db.js";

dotenv.config();
connctDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
