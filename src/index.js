const express = require('express');
const router = require('./routes/router');

// const providerRouter = require("./routes/provider.router");
const app = express();

router(app);

// app.use(bodyParser.json());
// app.use('/api/providers', providerRouter);

app.listen(8000, () => console.log('Listening on http://localhost:8000'));
