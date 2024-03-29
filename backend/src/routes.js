const express = require('express');

const DevController = require('./controllers/DevController.js');

const LikeController = require('./controllers/LikeController.js');
const DisikeController = require('./controllers/DislikeController.js');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); 
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', LikeController.store);

module.exports = routes; 