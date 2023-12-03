import userModel from "./user.model.js";

export default class userController{
    addUser(req,res){
        var email = req.body.email;
        var name = req.body.name;
        var pass = req.body.pass;
        const result = userModel.addData(email,name,pass);
        res.status(201).send("User added successfully")
    };
    signIn(req,res)
    {
        return 
    }
}