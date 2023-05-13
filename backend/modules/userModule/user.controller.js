const generateToken = require("../../utils/generatetoken")

const userModel = require("./user.model")

exports.registerUser = async (req, res) => {
    const { name, email, password, picture } = await req.body


    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please Provide all the info")
    }

    const checkUser = await userModel.findOne({ email })
    if (checkUser) {
        res.status(400)
        throw new Error("User Already Exists")
    }

    const User = await userModel.create({
        name,
        email,
        password,
        picture

    })
    if (User) {
        res.status(200).json({
            status: "success",
            message: "User Created Succesfully",
            data: { User, token: generateToken(User._id) },


        })
    } else {
        res.status(400).json({
            status: "Failed",
            message: "Failed to Create User"
        })
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    const User = await userModel.findOne({ email })
    if (User && (await User.matchpass(password))) {
        res.status(200).json({
            status: "success",
            message: "User get Succesfully",
            data: { User, token: generateToken(User._id) },


        })
    } else {
        res.status(400).json({
            status: "Failed",
            message: "Failed to Find User"
        })
    }

}
