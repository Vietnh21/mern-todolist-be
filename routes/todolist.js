const todolistController = require("../controllers/todolistController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", todolistController.addTodolist);

//GET ALL AUTHORS
router.get("/", todolistController.getAllTodolist);

//GET AN AUTHOR
router.get("/:id", todolistController.getATodolist);

//UPDATE AN AUTHOR
router.put("/:id", todolistController.updateTodolist);

//DELETE AUTHOR
router.delete("/:id", todolistController.deleteTodolist);

module.exports = router;
