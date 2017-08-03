const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const mustacheExpress =require('mustache-express');
mongoose.Promise = require('bluebird');
//create app instance for express
const app = express();

//connect mongoose to mongodb through mongoose (27017: standard port for mongo//recipes is the database)
mongoose.connect('mongodb://localhost:27017/valKilFilmdb');


const recipeSchema = new mongoose.Schema({
  name: {type: String, require: true, trim:true, lowercase: true, unique: true},
  ingredients:[{
    quantity: { type: String, required: true,},
    type:{type: String, lowercase: true, trim:true},
    name: {type: String, require: true, trim:true, lowercase: true}
  }],
  timers:[Number],
  steps:[{type:String, required:true}],
  originalURL:{type:String},
  imageURL:String
});



const Film = mongoose.model('Valfilm',valKilSchema);

var film = new Film({
title: "Heat",
 writer :'Michael Mann',
 director : 'Michael Mann',
 year : '1995',
 characrter : "Chris Shiherlis",
 genre : "Action",
 synopsis : "A bank robber trys to survive an ass grabbing maniac",
 gross :"$67,436,818",
 photo : "https://i.ytimg.com/vi/b60-sEXUPBY/maxresdefault.jpg"
});

// film.save().then(function(){
// //actions after sucessful save
//   console.log('saved');
//
// }).catch(function() {
//     console.log('i done goofed');
//   //handle error
//
// });
