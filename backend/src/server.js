import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({status: "ok"});
});

app.listen(PORT, () => {
  console.log("O servidor está rodando na porta " + PORT)
});