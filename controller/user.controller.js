const User = require("../model/user.model");

/* ------------Create user ---------- */
exports.createUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    if (user) {
      return res.status(404).json({ msg: "user not found" });
    } else {
        user = await User.create({...req.body})
    }
    res.status(201).json({msg:'User Created',user});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:"internal server error"});
  }
};

/* --------------- find One  --------------*/

exports.getUser = async (req,res)=>{
  try {
      let user = await User.findById(req.query.userId)
      if(!user){
        res.status(404).json({msg:"User not Found"})
      }
      res.status(200).json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Intranal Sever Error"})
  }
}

/* -------------- find all user--------------- */

exports.getAllUser = async (req, res)=>{
  try {
      let users = await User.find({isDelete:false});
      res.status(200).json(users)
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Internal Server Error"})
  }
}
