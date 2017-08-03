const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const mustacheExpress =require('mustache-express');
mongoose.Promise = require('bluebird');
//create app instance for express
const app = express();

//connect mongoose to mongodb through mongoose (27017: standard port for mongo//recipes is the database)
mongoose.connect('mongodb://localhost:27017/valKilFilmdb');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

const valKilSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true},
  director: String,
  writer: String,
  character: String,
  year: Number,
  genre: String,
  synopsis: String,
  gross: String,
  photo:String
});

const Film = mongoose.model('Valfilm',valKilSchema);
//
// var findVal = function(db,callback){
//   Film.find().then(function(result)
//    console.log("found ",result.length, " films");
//    callback(result);
// });
// }

app.get('/', function(request, response){
  Film.find().then(function(films) {
      response.render('kilmerFilms',{films});
  });
});



// console.log(recipe.toObject());
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
