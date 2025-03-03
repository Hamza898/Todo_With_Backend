const express = require("express");
const router = express.Router();

const {
  create,
  remove,
  getAll,
} = require("..//./controllers/doneTaskController");

router.get("/", getAll);
router.post("/create", create);
router.delete("/delete/:id", remove);

module.exports = router;
