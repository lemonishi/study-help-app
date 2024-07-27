const mongoose = require("mongoose");
const Task = require("../models/taskModel");

const getTasks = async (req, res, next) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });
  res.status(200).json(tasks);
};

const getTask = async (req, res, next) => {
  const id = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such task." });
    }
    const task = await Task.find({ id });
    if (!task) {
      return res.status(404).json({ error: "No such task." });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const createTask = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const newTask = await Task.create({ title, content });
    res.status(200).json(newTask);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const deleteTask = async (req, res, next) => {
  const id = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such task." });
    }
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      return res.status(404).json({ error: "No such task" });
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const updateTask = async (req, res, next) => {
  const id = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such task" });
    }
    const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!task) {
      return res.status(404).json({ error: "No such task" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = { getTasks, getTask, createTask, deleteTask, updateTask };
