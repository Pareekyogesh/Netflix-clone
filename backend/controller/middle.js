// import { errorHandler } from './dbErrorHandler';
const {errorHandler} = require('./dbErrorHandler');
const User = require('./model');
exports.signup = (req,res) =>{
    console.log("req.body:",req.body);
    const user =new User(req.body);        

    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:errorHandler(err)
            });
        }
        res.json({
            user
        });
    });
};

exports.signin =(req,res) => {
    const{username,password}= req.body; //get login crediential from user
    console.log(username);
    User.findOne({username},(err,user) =>{ //fetch email and also passed callback function for find error
         
        if(err || !user){
           return  res.status(400).json({
            error:"user with this username not exist"
        });
        }
         // if user is found make sure the email and password match
        // create authenticate method in user model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password dont match'
            });
        }    
        console.log(user);    
        const { _id, username, gender, mobile_no } = user;        //destructure of array
        return res.json({user: { _id, username, gender, mobile_no } });
    });
};