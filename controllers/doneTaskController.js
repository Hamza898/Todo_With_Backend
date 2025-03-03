const DoneTasks = require("..//./models/DoneTasks.model");

exports.create = async (req, res) => {
  console.log('here')
  try {
    const { title, description, checklist, type } = req.body;

    const data = { title, type };

    if (type === "description") {
      data["description"] = description;
    } else {
      data["checklist"] = checklist;
    }

    const task = await DoneTasks.create(data);

    res.json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    await DoneTasks.deleteOne({ _id: id });
    res.json({ msg: "task deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const task = await DoneTasks.find();
    res.json(task);
  } catch (error) {
    return res.status(404).send("There are no tasks");
  }
};
