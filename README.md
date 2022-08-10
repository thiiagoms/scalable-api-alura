<p align="center">
  <a href="https://github.com/thiiagoms/alura-node">
    <img src="assets/alura.png" alt="Logo" width="80" height="80">
    <img src="assets/handshake.png" alt="Logo" width="70" height="70">
    <img src="assets/node.png" alt="Logo" width="80" height="80">
  </a>
     <h3 align="center">API with Node and Alura! :hearts:</h3>
</p>

- [Dependencies](#Dependencies)
- [Usage](#Usage)

### Dependencies
 - Git
 - NodeJs LTS
 - MySQL
 - API Rest Client (Postman, Insomnia, etc)

### Usage

1 - Clone: 
```bash
$ git clone git@github.com:thiiagoms/scalable-poc-api-alura
```

2 - Change `credentials` in `config/default.json`:
```json
{
    "mysql": {
        "databaseName": "[DATABASE-NAME]",
        "databaseUser": "[DATABASE-USER]",
        "databasePass": "[DATABASE-PASS]",
        "databaseHost": "[DATABASE-HOST]"
    },
    "api": {
        "PORT": [API-PORT-HERE]
    }
}
```

3 - Run migrations:
```bash
$ npm run migrate
```

4 - Stand up server
```bash
$ npm run dev
Listening on http://localhost:[YOUR-API-PORT] or Listening on http://localhost:8000
```