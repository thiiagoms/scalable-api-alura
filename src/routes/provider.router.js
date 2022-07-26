const providerRouter = require("express").Router();
const ProviderController = require("../controllers/ProviderController");

providerRouter.get("/", async (_, response) => {
  const providersList = await ProviderController.listProviders();
  response.status(200).send(JSON.stringify(providersList));
});

providerRouter.get("/:id", async (request, response) => {
  try {
    const providerId = request.params.id;
    const provider = await ProviderController.findProvider(providerId);
    response.status(200).send(JSON.stringify(provider));
  } catch (error) {
    response.status(404).send({ message: "Provider not found" });
  }
});

providerRouter.post("/create", async (request, response) => {
  const provider = new ProviderController(request.body);
  await provider.createProviders();
  response.status(201).send(JSON.stringify(provider));
});

providerRouter.put("/:id", async (request, response) => {
  const providerId = request.params.id;
  await ProviderController.updateProvider(providerId, request.body);
  response.status(200).send({message: "updated"});
});

providerRouter.delete("/:id", async (request, response) => {
  const providerId = request.params.id;
  await ProviderController.deleteProvider(providerId);
  response.status(204).send();
});

module.exports = providerRouter;
