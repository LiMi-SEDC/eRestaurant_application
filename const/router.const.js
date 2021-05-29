const router = require("express").Router();
const auth = require("../routes/auth.routes");
const dishes = require("../routes/dishes.routes");

router.use("/auth", auth);
router.use("/posts", dishes);

module.exports = router;
