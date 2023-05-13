const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5000

async function main() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Server is connected to DB")

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })

    } catch (error) {
        console.log("Failed To connect", error.message)
    }
}
main()