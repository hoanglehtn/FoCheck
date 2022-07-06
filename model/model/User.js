const mongoose = require('mongoose')
const {usersSchema} = require("../schema/user_Schema")
const User = mongoose.model("User",usersSchema)
module.exports = {User}