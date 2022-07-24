const bodyParser = require('body-parser');
const providerRouter = require('./provider.router');

const router = (app) => {
  app.use(bodyParser.json());
  app.use('/api/providers', providerRouter);
};

module.exports = router;
