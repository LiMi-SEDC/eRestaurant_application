const DishesModel = require("../models/dishes.model");
const dm = new DishesModel();

class DishesController {
  addNewDishes(post) {
    return dm.createNewPost(post);
  }

  fetchAllDishes() {
    return dm.getAllDishes();
  }
}

module.exports = DishesController;
