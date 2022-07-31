const bodyParser = require('body-parser');
const providerRouter = require('./provider.router');
const helloRouter = require('./helo.router');

const router = (app) => {
  app.use(bodyParser.json());
  app.use('', helloRouter);
  app.use('/api/providers', providerRouter);
};

module.exports = router;
