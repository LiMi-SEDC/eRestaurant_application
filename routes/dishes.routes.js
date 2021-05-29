const router = require("express").Router();
const DishesController = require("../controllers/dishes.controller");
const dc = new DishesController();

router.post("/", (req, res) => {
  const newDishes = req.body;
  dc.addNewDishes(newDishes)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.get("/all-dishes", (req, res) => {
  dc.fetchAllDishes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});
module.exports = router;
