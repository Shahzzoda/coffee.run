const express = require('express');
const models = require('../models');

const StoresController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);

    return router;
  },

  // List All users
  index(req, res) {
    return models.Stores.findAll()
    .then(stores => {
      res.json(stores);
    });
  },
}


module.exports = StoresController.registerRouter();