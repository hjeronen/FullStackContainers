const express = require('express');
const redis = require('../redis')
const router = express.Router();

const configs = require('../util/config')

/* GET index data. */
router.get('/', async (_req, res) => {
  const visitsStored = await redis.getAsync('visits') ?? 0
  const visitsNow = Number(visitsStored) + 1
  await redis.setAsync('visits', visitsNow)

  res.send({
    ...configs,
    visits: visitsNow
  });
});

router.get('/statistics', async (_req, res) => {
  const addedTodos = await redis.getAsync('added_todos')

  res.json({
    added_todos: Number(addedTodos) ?? 0,
  });
});

module.exports = router;
