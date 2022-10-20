import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type:String, required :true, unique:true},
firstname: {type:String, required :true},
lastname: String,
ip: String,
hash: {type:String, required :true},
avatar: {type:String, default: generateRobohashAvatar()},
dates: {
    registered: {type:Date, default: Date.now()},
    last_active: Date
},
messages: Number
});

const User = mongoose.model("user", UserSchema);

export default User;
