/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';

router.post('/', (req, res) => {
  const g = new Game(req.body);
  g.save(() => {
    res.send(g);
  });
});

router.post('/flip', (req, res) => {
  const id = req.body.id;
  const num = req.body.num;
  Game.find({_id: id}, (err, game) => {
    if (num > .5) {
      game.heads = game.heads + 1;
    } else {
      game.tails = game.tails +1;
    }
    game.save(() => {
      res.send(game);
    )};
  });
});

  const g = new Game(req.body);
  g.save(() => {
    res.send(g);
  });
});
