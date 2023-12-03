import mongoose from "mongoose";

const qtnSchema = mongoose.Schema({
    question:{type:String}
});

export const questionsDB = mongoose.model('questionDB',qtnSchema);