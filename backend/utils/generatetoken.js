const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.secret_key, { expiresIn: "10d" })
}
module.exports = generateToken