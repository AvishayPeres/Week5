const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/weatherAppDB", { useNewUrlParser: true })

const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String
})


const City = mongoose.model("City", citySchema)