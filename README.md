<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Projeto NestJS - Exercício e Consulta

Este é um projeto em NestJS desenvolvido como base para exercícios e consulta. O projeto implementa operações básicas CRUD (Create, Read, Update, Delete) para gerenciar uma entidade `Person`, incluindo listagem, busca por ID, salvamento, atualização e exclusão de pessoas.

## Requisitos

- Node.js (v20+)
- npm (ou yarn)

## Instalação

1. **Clone o repositório:**

   ```bash
   git@github.com:RobsonFe/CRUD-NestJS.git
   cd crud
   ```

2. **Instale as dependências:**

   Utilizando npm:

   ```bash
   npm install
   ```

   ou utilizando yarn:

   ```bash
   yarn
   ```

## Configuração

- O projeto utiliza o NestJS com TypeScript para facilitar o desenvolvimento e manutenção.
- O serviço `PeopleService` gerencia a entidade `Person`, com operações CRUD implementadas.
- O controlador `PeopleController` define rotas para acessar e manipular os dados de pessoas.

## Uso

Para executar o servidor localmente, utilize o seguinte comando:

```bash
npm run start:dev
```

ou

```bash
yarn start:dev
```

Isso iniciará o servidor localmente em `http://localhost:3000`.

### Rotas Disponíveis

- **Listar todas as pessoas:**

  ```
  GET http://localhost:3000/people
  ```

- **Buscar pessoa por ID:**

  ```
  GET http://localhost:3000/people/buscar/:id
  ```

- **Salvar uma nova pessoa:**

  ```
  POST http://localhost:3000/people/salvar
  Body: { "id": 1, "name": "Nome da Pessoa" }
  ```

- **Atualizar pessoa por ID:**

  ```
  PUT http://localhost:3000/people/atualizar/:id
  Body: { "name": "Novo Nome da Pessoa" }
  ```

- **Excluir pessoa por ID:**

  ```
  DELETE http://localhost:3000/people/deletar/:id
  ```

### Exemplo de Uso

```bash
# Salvar nova pessoa
curl -X POST -H "Content-Type: application/json" -d '{ "id": 1, "name": "João" }' http://localhost:3000/people/salvar

# Listar todas as pessoas
curl http://localhost:3000/people

# Buscar pessoa por ID
curl http://localhost:3000/people/buscar/1

# Atualizar pessoa por ID
curl -X PUT -H "Content-Type: application/json" -d '{ "name": "João da Silva" }' http://localhost:3000/people/atualizar/1

# Deletar pessoa por ID
curl -X DELETE http://localhost:3000/people/deletar/1
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
