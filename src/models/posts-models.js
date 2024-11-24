import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectar_banco from "../config/dbconfig.js";

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.
// A função `conectar_banco` retorna uma promessa que, quando resolvida, fornece um objeto de conexão.
const conexao = await conectar_banco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados.
// 1. Obtém o banco de dados "imersao-instalike".
// 2. Obtém a coleção "posts" dentro do banco de dados.
// 3. Executa uma consulta para encontrar todos os documentos na coleção e retorna um array com os resultados.
export async function get_todos_posts() {
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    
    return colecao.find().toArray();
};

export async function criar_post(novo_post) {
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");

    return colecao.insertOne(novo_post);
};

export async function atualizar_post(id, novo_post) {
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    const obj_id = ObjectId.createFromHexString(id);

    return colecao.updateOne({_id: new ObjectId(obj_id)}, {$set:novo_post});
};