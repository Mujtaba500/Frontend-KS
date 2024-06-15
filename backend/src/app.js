import express from "express";
import "dotenv/config";
import { connectDb } from "./db/config.js";
import syncDb from "./db/sync.js";
import todoRouter from "./routes/todoList.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.use(todoRouter);

connectDb();
syncDb().then(() => {
  console.log("DB synced");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
