import mongoose from "mongoose";

const optSchema = mongoose.Schema({
    option:{type:String},vote:{type:Number},vote_link:{type:String},qtnId:{type:String}
});

export const optionsDB = mongoose.model('optionDB',optSchema);