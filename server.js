import express from "express";
import routes from "./src/routes/posts-routes.js";

const app = express();

app.use(express.static("uploads"));

routes(app);

// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => { 
    console.log("Servidor escutando...");
});