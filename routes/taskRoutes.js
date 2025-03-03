const express = require("express");
const router = express.Router();

const {
  create,
  update,
  remove,
  getAll,
  getOne,
  removeFromChecklist,
  updateStatus,
  updateIsChecked
} = require("./../controllers/taskController");

router.post("/create", create);
router.post("/update/:id", update);
router.delete("/delete/:id", remove);
router.get("/", getAll);
router.get("/:id", getOne)
router.post("/update/checklist/:taskId/:id", removeFromChecklist)
router.post("/updateStatus/:id", updateStatus)
router.post("/updateCheck/:id/:listId" , updateIsChecked)

module.exports = router;
