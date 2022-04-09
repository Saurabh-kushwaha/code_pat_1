const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, require: true },
        last_name: { type: String, require: true },
        mobile: { type: Number, require: true, unique: true, length: 10 },
        email: { type: String, require: true, unique: true },
        location_type: { type: String, require: true, },
        location_string: { type: String, require: true, },
        status: {type:Boolean, default:true}
    }
);
const User = mongoose.model('user', userSchema);
module.exports = User;