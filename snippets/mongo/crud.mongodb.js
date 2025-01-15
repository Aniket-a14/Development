use("CrudDb")

db.createCollection("prac")

//Create->insert
// db.prac.insertOne({
//     name: "Aniket",
//     roll: 30,
//     section: "K23SM"
// })



//Read
// let a = db.prac.findOne({roll:30})
// console.log(a)



//Update
// db.prac.updateOne({roll:30}, {$set:{roll:31}}) //set is an atomic operator


//Delete
db.prac.deleteOne({roll:31})