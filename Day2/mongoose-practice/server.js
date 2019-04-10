
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true })
// mongoose.connect('mongodb://localhost/personDB', { useNewUrlParser: true })

// const Schema = mongoose.Schema

// const computerSchema = new Schema({
//     maker: String,
//     price: Number
// })
// const Computer = mongoose.model('Computer', computerSchema)

// let c1 = new Computer({
//     maker: "Apple",
//     price: 1200
// })
// let c2 = new Computer({
//     maker: "Dell",
//     price: 499
// })

// // c1.save()
// // console.log(c1)
// // c2.save()
// // console.log(c2)


// const addressSchema = new Schema({
//     city: String,
//     street: String,
//     apartment: Number
// })
// let personSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     address: addressSchema
// })

// const Person = mongoose.model('Person', personSchema)

// let p1 = new Person({
//     firstName: "David",
//     lastName: "Smith",
//     age: 25
// }) //purposefully ignoring the `address` field


// Person.find({}, function (err, people) {
//     console.log(people)
// })


// // p1.save()
// // console.log(p1)
// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

// Person.find({age: { $gt: 30 } }, function (err, people) {
//     console.log(people)
// })



// // Server setup
// const express = require('express')
// const app = express()

// // Mongoose setup
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

// // Schema/model setup
// const personSchema = new Schema({
//     firstName: { type: String, required: true },
//     lastName: String,
//     age: Number
// })
// const Person = mongoose.model("Person", personSchema)

// //Routes
// app.get('/people', function (req, res) {
//     Person.find({}, function (err, people) {
//         res.send(people)
//     })
// })

// const port = 4200
// app.listen(port, function () {
//     console.log(`Running on port ${port}`)
// })

// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})