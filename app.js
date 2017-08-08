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

app.get('/', function(request, response){
  Film.find().then(function(films) {
      response.render('kilmerFilms',{films});
  });
});


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

var film = new Film();
  film.title= "Heat",
   film.writer='Michael Mann',
   film.director= 'Michael Mann',
   film.year = '1995',
   film.characrter = "Chris Shiherlis",
   film.genre = "Action",
   film.synopsis= "A bank robber trys to survive an ass grabbing maniac",
   film.gross ="$67,436,818",
   film.photo = "https://i.ytimg.com/vi/b60-sEXUPBY/maxresdefault.jpg"


film.save().then(function(){
  console.log("I'll be your Huckelberry");
}).catch(function(){
  console.log("You\'re no daisy at All!");
});



// console.log(recipe.toObject());
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
