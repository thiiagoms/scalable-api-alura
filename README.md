# NodeJS API Alura

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