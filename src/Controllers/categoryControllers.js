const Category = require("../Models/categoryModel");
const Item = require("../Models/itemModel");

const getCategorys = async (req,res) =>{
    const {category} = req.params;
    try{
        const categorydata = await Category.findOne({name : category});
        if(!categorydata){
            return res.status(404).json({message : "Category not found"});
        }

        const items = Item.find({menuItem: categorydata.menuItem })

        console.log(items);

    }catch(error){
        console.log(error)
    }
}