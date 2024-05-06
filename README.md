# Teste Kanastra

## Pré-requisitos:
### Python3, node v20 e postgresql.

## Comandos:
#### Para buildar o projeto e startar as aplicações e o banco: docker-compose up --build
#### Para dar stop no projeto e remover as imagens: docker-compose down --rmi all

#### Obs.: Para acessar o BD diretamente no container: docker exec -it **image_ID** psql -U usertest -d kanastra-bd
#### Exemplo de consulta select: "select * from charges;"


## Arquivos:

### Backend:

**database.py** - configura uma conexão com o banco e define uma função para inicializar o esquema do banco de dados.

**main.py** - Lógica do servidor

**models.py** - Modelos do banco de dados

**schemas.py** - Esquemas

### Frontend:

**App.js** - Rotas

**TestAPI.js** - App para adição das cobranças












