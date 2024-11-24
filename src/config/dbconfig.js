import { MongoClient } from "mongodb";

export default async function conectar_banco(string_conexao) {
    let mongo_client;
    
    try {
        mongo_client = new MongoClient(string_conexao);
        console.log("Conectando ao cluster do banco de dados...");

        await mongo_client.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso!");

        return mongo_client;
    } catch (erro) {
        console.error("Falha na conexão com o banco!", erro);
        process.exit()
    };
};