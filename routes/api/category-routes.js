const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({})
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const data = await Category.findOne({
      where: {
        id: req.params.id
      }
    })

  res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const data = await Category.create(req.body)
    res.status(200).json(data)

  } catch (err) {
    res.status(500).json(err)
  }
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
