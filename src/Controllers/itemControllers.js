const  Item  = require("../Models/itemModel")

const getAllItems = async (req,res) =>{
    // using dessing order sort({creatAt:-1})
    const result = await Item.find().sort({createAt: -1})
    res.status(200).json(result);
}

module.exports ={
    getAllItems,
}