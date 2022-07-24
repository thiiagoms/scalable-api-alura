const Provider = require("../models/Provider");

class ProviderController {
  constructor({ name, email, cellphone, category }) {
    this.id = 0;
    this.name = name;
    this.email = email;
    this.cellphone = cellphone;
    this.category = category;
  }

  static async listProviders() {
    return Provider.findAll();
  }

  static async findProvider(providerId) {
    const provider = await Provider.findOne({
      where: {
        id: providerId,
      },
    });

    if (!provider) {
      throw new Error("Provider not found");
    }

    return provider;
  }

  async createProviders() {
    return Provider.create({
      name: this.name,
      email: this.email,
      category: this.category,
    });
  }
}

module.exports = ProviderController;
