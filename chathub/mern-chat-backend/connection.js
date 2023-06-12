const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://indra:indra@cluster0.oyb1koa.mongodb.net/", ()=> {
  console.log('connected to mongodb')
}) 
