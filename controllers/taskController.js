const Task = require("./../models/TaskModel");

exports.create = async (req, res) => {
  try {
    const { title, description, checklist, type } = req.body;

    const data = { title, type };

    if (type === "description") {
      data["description"] = description;
    } else {
      data["checklist"] = checklist;
    }

    const task = await Task.create(data);

    res.json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    const { title, description, type } = req.body;
    task.title = title;
    task.description = description;
    task.type = type;
    await task.save();

    // const task = await Task.updateOne(
    //   { _id: id },
    //   { $set: { title, description, type } }
    // );

    res.json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.deleteOne({ _id: id });
    res.json({ msg: "task deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    return res.status(404).send("There are no tasks");
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send("There are no tasks");
    }
    res.json(task);
  } catch (error) {
    return res.status(404).send("There are no tasks");
  }
};

exports.removeFromChecklist = async (req,res)=>{
    const {taskId , id}=req.params
    try {
     const data= await Task.findById(taskId)
     data.checklist=data.checklist.filter(list=> id!=list.id)
     await data.save()
     res.json(data)

    } catch (error) {
        
    }
}