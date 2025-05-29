db.employees.updateOne(
  { email: "john@gmail.com" },
  { $set: { email: "john@outlook.com" } }
); ////1


db.employees.find().sort({ salary: -1 }).limit(3);//2



db.employees.updateMany({}, { $inc: { salary: 1000 } });//3

db.employees.insertOne({
  name: "New Admin",
  email: "admin@example.com",
  department: "admin",
  salary: 3000,
  location: ["TX"],
  date: new Date()
});//4



db.employees.deleteMany({ department: "admin" });//5
