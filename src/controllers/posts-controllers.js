import fs from "fs";
import gerar_descricao_gemini from "../services/gemini-service.js";
import {get_todos_posts, criar_post, atualizar_post} from "../models/posts-models.js";

// 1. Chama a função `get_todos_posts` para obter todos os posts do banco de dados.
// 2. Envia uma resposta HTTP com status 200 (OK) e o array de posts no formato JSON.
export async function listar_posts(req, res) {
    const posts = await get_todos_posts();
    res.status(200).json(posts);
};

export async function postar_novo_post(req, res) {
    const novo_post = req.body;

    try {
        const post_criado = await criar_post(novo_post);
        res.status(200).json(post_criado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição."});
    };
};

export async function upload_imagem(req, res) {
    const novo_post = {
        descricao: "",
        img_url: req.file.originalname,
        alt: ""
    };

    try {
        const post_criado = await criar_post(novo_post);
        const imagem_atualizada = `uploads/${post_criado.insertedId}.png`;
        fs.renameSync(req.file.path, imagem_atualizada);
        res.status(200).json(post_criado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição."});
    };
};

export async function atualizar_novo_post(req, res) {
    const id = req.params.id;
    const url_img = `http://localhost:3000/${id}.png`;

    try {
        const img_buffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerar_descricao_gemini(img_buffer);

        const post = {
            img_url: url_img,
            descricao: descricao,
            alt: req.body.alt
        };

        const post_criado = await atualizar_post(id, post);
        res.status(200).json(post_criado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição."});
    };
};