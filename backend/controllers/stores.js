const express = require('express');
const models = require('../models');

const StoresController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/stores', this.getStores);
    // router.post('/', this.create);
    // router.put('/:username', this.update);
    // router.delete('/:username', this.delete);

    return router;
  },

  // List All users
  index(req, res) {
    res.json({
     msg: "Successful GET to '/stores' route"
    });
  },

  // Get a username
  getStores(req, res) {
    return models.Stores.findAll()
    .then(stores => {
      res.json(stores);
    });
  },
}


module.exports = StoresController.registerRouter();