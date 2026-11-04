import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("inscricoes.db");

db.exec(`CREATE TABLE IF NOT EXISTS inscricoes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            telefone TEXT,
            tipoIngresso TEXT NOT NULL)`);

export default db;