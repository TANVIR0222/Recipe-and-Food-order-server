const Item = require("../Models/itemModel");

const getAllItems = async (req, res) => {
  // using dessing order sort({creatAt:-1})
  const result = await Item.find().sort({ createAt: -1 });
  res.status(200).json(result);
};

const getsearchItemAll = async (req, res) => {
  const { q } = req.params;
  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: "Item not found" });
  }
};

const getSingleItems = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    res.json(item);
  } catch (err) {
    res.status(404).json({ message: "Item not found" });
  }
};

module.exports = {
  getAllItems,
  getsearchItemAll,
  getSingleItems,
};
