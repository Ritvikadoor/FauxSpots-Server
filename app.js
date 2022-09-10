const db = require("./config/connection")
const express = require("express")
const app = express()

// db connect
db.connect((err) => {
    if (err) {
        console.log("Database Error");
    } else {
        console.log("Databse Connected");
    }
})

// local host

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server starting ${port}`))


//json converter

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
