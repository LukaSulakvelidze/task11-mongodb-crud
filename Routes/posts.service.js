const userModel = require("../db/userModel");

const Get = async (_, res) => {
  const data = await userModel.find();
  res.json(data);
};

const Post = async (req, res) => {
  const { name, email, age } = req.body;
  const data = await userModel.create({ name, email, age });
  res.json(data);
};

const Delete = async (req, res) => {
  const { id } = req.params;
  if (!id) throw new Error("Id is required");
  const deleted = await userModel.findByIdAndDelete(id);
  if (!deleted) throw new Error("This Id does not exist");
  res.json(deleted);
};

const Put = async (req, res) => {
  const { id } = req.params;
  if (!id) throw new Error("Id is required");
  const { name, email, age } = req.body;
  const updated = await userModel.findByIdAndUpdate(
    id,
    { name, email, age },
    { new: true }
  );
  res.json(updated);
};
module.exports = { Get, Post, Delete, Put };
