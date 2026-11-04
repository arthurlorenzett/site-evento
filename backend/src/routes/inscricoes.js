import { Router } from "express";
import db from "../db.js";

const router = Router();

router.get("/", (req, res) => {
    const inscricoes = db.prepare("SELECT * FROM inscricoes").all();
    res.json(inscricoes);
})

router.post("/", (req, res) => {
    const { nome, email, telefone, tipoIngresso } = req.body || {}; 
    
    if (!nome || !email || !tipoIngresso) {
        return res.status(400).json({ error: "Nome, email e tipo de ingresso são obrigatórios." });
    }

    if (!["estudante", "profissional"].includes(tipoIngresso)) {
        return res.status(400).json({ error: "Tipo de ingresso inválido" });
    } 

    const existente = db.prepare("SELECT id FROM inscricoes WHERE email = ?").get(email);

    if (existente) {
        return res.status(400).json({ error: "E-mail já cadastrado" });
    }

    const resultado = db
        .prepare("INSERT INTO inscricoes (nome, email, telefone, tipoIngresso) VALUES (?, ?, ?, ?)")
        .run(nome, email, telefone || null, tipoIngresso);
    res.status(201).json({ id: resultado.lastInsertRowid, nome, email, telefone: telefone || null, tipoIngresso });
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const resultado = db.prepare("DELETE FROM inscricoes WHERE id = ?").run(id);

    if (!resultado.changes) {
        return res.status(404).json({ error: "Inscrição não encontrada" });
    }

    res.status(204).send();
});

export default router;