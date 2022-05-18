const { Todolist } = require("../model/model");

const todolistController = {
  //ADD To do list
  addTodolist: async (req, res) => {
    try {
      const newTodolist = new Todolist(req.body);
      const savedTodolist = await newTodolist.save();

      res.status(200).json(savedTodolist);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL To do list
  getAllTodolist: async (req, res) => {
    try {
      const todolists = await Todolist.find();
      res.status(200).json(todolists);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN To do list
  getATodolist: async (req, res) => {
    try {
      const todolist = await Todolist.findById(req.params.id);
      res.status(200).json(todolist);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE To do list
  updateTodolist: async (req, res) => {
    try {
      const todolist1 = await Todolist.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json({ todolist1 });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE To do
  deleteTodolist: async (req, res) => {
    try {
      await Todolist.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = todolistController;
