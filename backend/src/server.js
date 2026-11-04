import express from "express";
import cors from "cors";
import inscricoesRouter from "./routes/inscricoes.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/inscricoes", inscricoesRouter);

app.get("/health", (req, res) => {
  res.json({status: "ok"});
});

app.listen(PORT, () => {
  console.log("O servidor está rodando na porta " + PORT)
});