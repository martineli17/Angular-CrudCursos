# Aplicação desenvolvida em Angular para realização de um CRUD para cursos

## Necessário
#### Download: https://nodejs.org/en/download/ - Node
#### Download: https://www.npmjs.com/package/json-server - Json-Server (para simular o back-end)

#### Após realizar os downloads acima (caso ainda não tenha instalado na sua máquina), crie um arquivo .JSON para simular dados dos cursos.
#### Exemplo de estrutura: 
{
  "courses": [
    {
      "id": 1,
      "name": "Angular",
      "releaseDate": "March 14, 2021",
      "description": "Aplicação Angular",
      "duration": 80,
      "code": "DWQ-3412",
      "rating": 3.5,
      "price": 24.99,
      "imageUrl": ""
    }
 ]
}

#### Feito isso, inicialize o JSON-SERVER: json-server --watch caminho-do-seu-arquivo-json-criado --port 3000
#### Para finalizar, inicie a aplicação com: npm start ou yarn start
