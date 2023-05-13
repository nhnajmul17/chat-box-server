const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    }
}, {
    timestamps: true
})

//matchpassword function
userSchema.methods.matchpass = async function (password) {
    return await bcrypt.compare(password, this.password)
}


//password encryption with bcrypt
userSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const userModel = mongoose.model("userModel", userSchema)

module.exports = userModel