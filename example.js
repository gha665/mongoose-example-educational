const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/exampleApp', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


//First model
const Cat = mongoose.model('Cat', {
  name: String
});


//Create a new instance
const kitty = new Cat({
  name: 'Ironhacker'
});


//Save kitty
kitty
  .save()
  .then(newCat => console.log(`A new cat is created ${newCat}`))
  .catch(err => console.log(`Error while creating a new cat: ${err}`));


function showCats() {
  console.log('All the CATS!');
  //List all cats
  Cat.find()
    .then(catsFromDB => {
      // catsFromDB is an array of Cat instances
      catsFromDB.forEach(oneCat => console.log(`--> cat: ${oneCat.name}`))
    })
    .catch(err => console.log(`Error occurred during getting cats from DB: ${err}`));
};


function addTenCats() {
  for (let i = 0; i < 10; i++) {
    addNewCat(`Ironhacker ${i}`);
  }
};

addTenCats();

/* We have to wait for our cats to save before displaying them
 Remember, it's async */
setTimeout(showCats, 1500);