const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", getTasks);

router.get("/:id", getTask);

// router.get("/me", authMiddleware, getMyTasks)

router.post("/", authMiddleware, createTask);

router.delete("/:id", deleteTask);

router.patch("/:id", updateTask);

module.exports = router;
