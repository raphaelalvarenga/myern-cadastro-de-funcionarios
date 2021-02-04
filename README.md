Acesse o banco de dados MySQL e utilize este comando:

> CREATE DATABASE desafio_tres_lm_informatica

Abra seu terminal e clone este repositório:

> git clone git@github.com:raphaelalvarenga/myern-cadastro-de-funcionarios.git

Entre no diretório:

> cd myern-cadastro-de-funcionarios

Se você estiver no Linux ou Mac, digite:

> ls

Se você estiver no Windows, digite:

> dir

Você verá duas pastas: backend e frontend. Vamos baixar as dependências de cada uma. Entre em backend:

> cd backend/

Instale as dependências:

> npm install

**Importante! Agora você precisa inserir as variáveis de ambiente do backend e do banco. Cole dentro da pasta backend/ o arquivo .env que você recebeu por e-mail e preencha os campos que estão sem valores depois do sinal de igual (=) de acordo com os dados de seu banco MySQL como usuário e senha, pois eu não os possuo.**

Coloque o backend para funcionar:

> npm run dev

**Abra um novo terminal e aponte para a pasta frontend:**

Agora vamos baixar as dependências do frontend:

> cd frontend/

Instale as dependências do frontend:

> npm install

Coloque o frontend para funcionar:

> npm start

Importante: o frontend vai perguntar se você deseja utilizar outra porta. Responda que sim apertando a tecla Y.