import mongoose from "mongoose";

mongoose.connect('mongodb://0.0.0.0:27017/polling_API');

export const db = mongoose.connection;

db.on('error',console.error.bind(console,'error while connecting to database'));

db.once('open',()=>{console.log('successfully connected to database')});