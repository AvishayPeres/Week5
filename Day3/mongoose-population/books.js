// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost/mongoosePopulationDB", { useNewUrlParser: true })

// const Schema = mongoose.Schema

// const bookSchema = new Schema({
//     title: String,
//     author: String,
//     reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }] //reference to an array of Review documents
// })

// const reviewSchema = new Schema({
//     book: { type: Schema.Types.ObjectId, ref: 'Book' }, //reference to a Book document
//     reviewText: String,
//     critic: { type: Schema.Types.ObjectId, ref: 'Critic' } //reference to a Critic document
// })

// const criticSchema = new Schema({
//     name: String,
//     reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], //reference to an array of Review documents
// })
// const Book = mongoose.model("Book", bookSchema)
// const Review = mongoose.model("Review", reviewSchema)
// const Critic = mongoose.model("Critic", criticSchema)

// let b1 = new Book({
//     title: "Name of the Wind",
//     author: "Patrick Rothfuss",
//     reviews: []
// })

// let c1 = new Critic({
//     name: "William Jeffery",
//     reviews: []
// })

// let r1 = new Review({
//     book: b1,
//     critic: c1,
//     reviewText: "Excellent Book"
// })


// b1.reviews.push(r1)
// c1.reviews.push(r1)

// b1.save()
// c1.save()
// r1.save()

// Book.find({}, function(err, books){
//     console.log(books)
// })

// Review.find({}, function (err, reviews) {
//     console.log(reviews)
// })

// Book.findOne({})
//     .populate("reviews")
//     .exec(function (err, book) {
//         console.log(book.reviews)
//     })


// Ex.1 -------------

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/SolarSystemsDB", { useNewUrlParser: true })

const Schema = mongoose.Schema

const SolarSystemSchema = new Schema({
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
    starName : String,
})

const PlanetSchema = new Schema({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'System'},
    visitors:  [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
})  

const VisitorSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})

const SolarSystem = mongoose.model("Planet", SolarSystemSchema)
const Planet = mongoose.model("System", PlanetSchema)
const Visitor = mongoose.model("Visitor", VisitorSchema)


let solar = new SolarSystem ({ 
    planets: [],
    starName : "Solar",
})
let earth = new Planet ({
    name: "Earth",
    system: solar,
    visitors: []
})

let mars = new Planet ({
    name: "Mars",
    system: Solar,
    visitors: []
})

let danny = new Visitor({
    name: "Danny",
    homePlanet: froinlaven,
    visitedPlanets: []
})

let ravid = new Visitor({
    name: "Ravid",
    homePlanet: mars,
    visitedPlanets: []
})

solar.save()
earth.save()
mars.save()
danny.save()
ravid.save()

// Planet.findOne({})
//     .populate("visitors")
//     .exec(function (err, Planet) {
//         console.log(Planet.visitors)
//     })

