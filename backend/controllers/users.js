const express = require('express');
const models = require('../models');


function checkDuplicate(username, email) {
  return models.Users.count({
    where: {
      $or: [
        {
          email: {$like: (email)}
        },
        {
          username: {$like: (username)}
        }
      ]
    }
  })
}

const UsersController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:email', this.getUser);
    // router.post('/', this.create);
    // router.put('/:username', this.update);
    // router.delete('/:username', this.delete);

    return router;
  },

  // List All users
  index(req, res) {
    return models.Users.findAll()
    .then(users => {
      res.json(users);
    });
  },

  // Get a username
  getUser(req, res) {
    let email = (req.params.username);
    return models.Users.findAll({
      where: {
        username: {
          $or: [
            {$like: '%' + (email) + '%'},
            {$like: (email) + '%'},
            {$like: '%' + (email)}
          ]
        }
      }
    }).then(result => {
      res.json(result);
    }).catch(error => {
      console.error("Error!");
      console.error(error);
      res.status(500).end();
    });
  },
  create(req, res) {
    res.json({
      msg: "Successful POST to '/alt' route"
    });
  },
  update(req, res) {
    res.json({
      msg: "Successful PUT to '/alt' route",
      id: req.params.id
    });
  },
  delete(req, res) {
    res.json({
      msg: "Successful DELETE to '/alt' route",
      id: req.params.id
    });
  },
}


module.exports = UsersController.registerRouter();