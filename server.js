const app = require('./src/index');
const config = require('config');

const PORT =  config.get('api.PORT') || 8000;

app.listen(PORT, () => console.log("Listening on http://localhost:8000"));
