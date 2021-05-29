class DishesModel {
  createNewPost(postData) {
    return new Promise((resolve, reject) => {
      process.firebase
        .firestore()
        .collection("dishes")
        .add(postData)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getAllDishes() {
    return new Promise((resolve, reject) => {
      process.firebase
        .firestore()
        .collection("dishes")
        .get()
        .then((array) => {
          let data = [];
          array.forEach((document) => {
            data.push({
              id: document.id,
              ...document.data(),
            });
          });
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = DishesModel;
