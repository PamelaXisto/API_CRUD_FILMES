# 🎞️ UniFECAF FLIX

UniFECAF FLIX é um site de catálogo de filmes desenvolvido em React no front-end e Node.js/Prisma no back-end.
Permite visualizar filmes em cards responsivos, filtrar com a barra de pesquisa e acessar a página de detalhes de cada filme.

## Tecnologias utilizadas

### ⚛️ Front-end:

- React

- CSS puro

- React Router

- Fetch API


### 🧩 Back-end:

- Node.js

- Prisma ORM

- MySQL (ou outro banco relacional)

- Express

## Estrutura do projeto

### Front-end (React)
```
uniFecafFlix/
├─ public/
│   └─ index.html               # Arquivo principal HTML
├─ src/
│   ├─ assets/
│   │   └─ images/              # Prints para o README
│   │       ├─ card_detalhes.png
│   │       ├─ card_pointer.png
│   │       ├─ pesquisa_card.png
│   │       └─ tela_inteira.png
│   ├─ components/
│   │   ├─ Header.js             # Cabeçalho com logo e SearchBar
│   │   ├─ Footer.js             # Rodapé
│   │   ├─ FilmeCard.js          # Card de cada filme
│   │   └─ SearchBar.js          # Barra de pesquisa
│   ├─ pages/
│   │   ├─ Home.js               # Página inicial com grid de filmes
│   │   └─ FilmeDetalhes.js      # Página de detalhes do filme
│   ├─ styles/
│   │   ├─ App.css
│   │   ├─ Header.css
│   │   ├─ FilmeCard.css
│   │   └─ Home.css
│   ├─ App.js
│   └─ index.js
```

### Back-end (Node.js + Prisma)
```
API_FILMES_UNIFCAF_FLIX/
├─ FILME/
│   ├─ controller/
│   │   └─ FilmeController.js    # Lida com rotas HTTP (GET, POST, etc.) e respostas para o front-end
│   ├─ model/
│   │   └─ filmeDAO.js           # Conexão com o banco, queries de filmes (CRUD)
│   ├─ modulo/
│   │   └─ config.js             # Configurações do servidor e do Prisma
├─ prisma/                       # Schema do banco e migrations
├─ .env                          # Variáveis de ambiente (ex: conexão MySQL)
├─ app.js                         # Inicializa o servidor Express
├─ package.json
├─ package-lock.json
└─ node_modules/
```

## 💡 Explicações importantes do back-end:

> FilmeController.js → define endpoints para listar filmes, buscar por ID e criar/editar filmes.

> filmeDAO.js → camada de acesso ao banco (queries SQL ou Prisma).

> config.js → configurações do servidor, porta, middleware e conexão com o Prisma.

> prisma/ → contém o schema.prisma e histórico de migrations para gerenciar o banco.

## Funcionalidades
### 1️⃣ Home

Exibe todos os filmes em cards responsivos

Cada card mostra: imagem, nome, sinopse resumida, botão “Detalhes”

Grid responsivo: 3 cards desktop, 2 tablet, 1 mobile

### 2️⃣ Barra de pesquisa

Filtra os filmes pelo nome

Barra separada do grid, centralizada

### 3️⃣ Página de detalhes

Exibe imagem completa, título, sinopse, duração e data de lançamento

Botão “Voltar” para Home

### 4️⃣ Interatividade dos cards

Efeito hover eleva o card e adiciona sombra


## 💡 Explicação do React

> useEffect → usado para buscar os dados do backend quando o componente Home monta (efeito colateral).

> Props (searchTerm + setSearchTerm) → comunicação entre Home e SearchBar para controlar o input de pesquisa (controlled component).

------------------------------

## 🧠 Regras de Validação

- Campos obrigatórios não podem ser nulos, vazios ou indefinidos.  
- IDs devem ser numéricos.  
- Caso nenhum registro seja encontrado, retorna status 404 com mensagem padrão.

---

## Testes dos Endpoints

Para testar os endpoints deste projeto, utilizei o **Postman**, uma ferramenta que permite realizar requisições HTTP de forma prática e visualizar as respostas da API.

---

## 💬 Mensagens de Retorno

| Tipo    | Status | Mensagem                                                                                      |
|---------|--------|----------------------------------------------------------------------------------------------|
| Sucesso | 200    | "Requisição realizada com sucesso!!!"                                                       |
| Erro    | 400    | "Não foi possível processar a requisição, pois os dados encaminhados não são válidos ou não foram encaminhados!!!" |
| Erro    | 404    | "Nenhum item encontrado!!!"                                                                  |
| Erro    | 500    | "Não foi possível processar a requisição, pois houveram erros internos no servidor!!!"        |

---

## 🧪 Banco de Dados

**📌 Nome do banco:** db_controle_filmes

```
sql
CREATE TABLE tbl_filme (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  duracao TIME NOT NULL,
  sinopse TEXT NOT NULL,
  data_lancamento DATE NOT NULL,
  foto_capa VARCHAR(200)
);
```



## Como rodar o projeto
### 🧩 Back-end

1.Instale dependências:

``npm install``

2.Configure o arquivo .env com sua conexão MySQL:

``DATABASE_URL="mysql://usuario:senha@localhost:3306/db_filmes"``

3.Rode as migrations do Prisma (caso use Prisma):

``npx prisma migrate dev``

4.Inicie o servidor:

``node app.js``

5.O back-end estará rodando geralmente em:

``http://localhost:8080``

-----------------------

### ⚛️ Front-end

1.Instale dependências:

``npm install``

2.Rode o projeto:

``npm start``

3.Acesse no navegador:

``http://localhost:3000``

------------------

## Telas
### 1. Aplicação Completa:
![tela_completa](./FILME-FRONT/src/assets/images/tela_inteira.png)

------------------------

### 2. Filtragem pelo nome do filme
![Filtragem](./FILME-FRONT/src/assets/images/pesquisa_card.png)

--------------------------

### 3. Detalhes do card com o cursor em cima
![card_cursor](./FILME-FRONT/src/assets/images/card_pointer.png)

---------------------------

### 4. Mais detalhes do card para uma melhor visualização 
![detalhes_card](./FILME-FRONT/src/assets/images/card_detalhes.png)