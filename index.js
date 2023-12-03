// import useful pakages
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { optRouter } from './src/options/options.router.js';
import { qtnRouter } from './src/questions/questions.router.js';
import { db } from './DBMS/mongoose.js';
import {questionsDB} from './DBMS/schema/questionDB.schema.js';
import {optionsDB} from './DBMS/schema/optionDB.schema.js'
import userRouter from './src/user/user.router.js';

// initialize app
const app  = express();

// define routes
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use('/api/user',userRouter);
app.use('/api/questions',qtnRouter);
app.use('/api/options',optRouter);


app.listen(3200,(err)=>{
    if(!err)
    {
        console.log('server is live on port 3200')
    }
});