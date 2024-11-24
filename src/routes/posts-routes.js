import express from "express";
import multer from "multer";
import cors from "cors";
import { listar_posts, postar_novo_post, upload_imagem, atualizar_novo_post } from "../controllers/posts-controllers.js";

const cors_options = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

// Configura o armazenamento do Multer para uploads de imagens.
const storage = multer.diskStorage({
    // Especifica o diretório para armazenar as imagens enviadas.
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // No Windows o arquivo é salvo com um nome aleatório, essa função mantém o nome original do arquivo.
        cb(null, file.originalname);
    }
});

const upload = multer({dest:"./uploads", storage});

// Define as rotas usando o objeto Express app.
const routes = (app) => {
    // Habilita o parser JSON para que o Express possa entender requisições com corpo em formato JSON.
    app.use(express.json());
    
    app.use(cors(cors_options));

    // Rota GET para a URL "/posts".
    app.get("/posts", listar_posts);
    // Rota para criar um post.
    app.post("/posts", postar_novo_post);
    // Rota para upload de imagens (assumindo uma única imagem chamada "imagem").
    app.post("/upload", upload.single("imagem"), upload_imagem);

    app.put("/upload/:id", atualizar_novo_post);
};

export default routes;