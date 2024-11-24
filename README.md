<h1 align="center">Sobre</h1>


<h2 align="center">Apresentação</h2>

Projeto criado durante a imersão back-end com Google Gemini da Alura, a proposta da imersão foi desenvolver uma estrutura back-end para ser usada junto com o front-end de um blog de fotos.


<h2 align="center">Tecnologias</h2>

Foi utilizado Node.js para criar o servidor e suas funcionalidades, o banco de dados MongoDB para armazenar as informações, o software Postman para criar e modificar as postagens, a inteligência artificial Gemini para gerar a descrição das fotos e o serviço Google Cloud para a hospedagem.

<hr></hr>

<h1 align="center">Arquivos necessários</h1>


<h2 align="center">Dependências</h2>

Abra o projeto no Visual Studio Code e no command prompt utilize os seguintes comandos para instalar as dependências:

`npm init es6 -y`

`npm install express`

`npm install mongodb`

`npm install multer`

`npm i @google/generative-ai`

`npm i cors`

`npm install dotenv`


<h2 align="center">Conexão com o banco de dados e a API</h2>

Crie um arquivo .env e declare as variáveis STRING_CONEXAO e GEMINI_API_KEY, as duas devem receber uma string, a primeira contendo o link que conecta ao banco de dados e a segunda contendo a chave da API.

Atenção: coloque os valores das variáveis entre aspas duplas para evitar problemas com o serviço Google Cloud.

<hr></hr>

<h1 align="center">Banco de dados</h1>

O banco de dados deve ser criado utilizando a seguinte estrutura:

<p>Nome: imersao-instalike</p>
<p>Coleção: posts</p>
<p>Tags: _id | descricao | img_url | alt</p>

<hr></hr>

<h1 align="center">Servidor local</h1>

Abra o projeto no Visual Studio Code e no command prompt utilize o comando `npm run dev` para ativar o servidor e o atalho Ctrl + C para desativá-lo. O servidor utiliza a porta 3000.

http://localhost:3000/posts - acessa o banco de dados.

Atenção: não faça alterações no código enquanto o servidor estiver ativo.

<hr></hr>

<h1 align="center">Postagens</h1>

Abra o software Postman e utilize as seguintes estruturas de requisição:

<h2 align="center">Estrutura para enviar uma imagem</h2>

<p>Post | http://localhost:3000/upload</p>

<p>body | form-data</p>

<p>key: imagem | value: (selecione uma imagem no formato png)</p>


<h2 align="center">Estrutura para inserir as descrições</h2>

<p>Put | http://localhost:3000/upload/ + id da imagem</p>

<p>body | raw | JSON</p>

<p>{</p>
<p>	"alt": "Escreva aqui a descrição de acessibilidade.”</p>
<p>}</p>

Observação: a descrição da imagem é gerada pelo Gemini nessa requisição via script.

<hr></hr>

<h1 align="center">Front-end</h1>

Repositório: https://github.com/Oliveira2211/Instalike-front-end