const helloRouter = require('express').Router();

helloRouter.get('/', (_, response) => {
  response.status(200).json({ message: 'Hello World' });
});

module.exports = helloRouter;
