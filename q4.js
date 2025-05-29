db.Products.insertMany([
  {
    name: "phone",
    price:20000,
    imageurl:"https://momunicipallaw.files.wordpress.com/2014/08/cell-phone.png",
  },
  {
    name: "laptop",
    price:100000,
    imageurl:"https://tse3.mm.bing.net/th?id=OIP.WCCq2nZelTZuFIRbJF7AuAHaEK&pid=Api&P=0&h=180",
  },
]);

db.products.find();