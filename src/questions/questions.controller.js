import { optionsDB } from "../../DBMS/schema/optionDB.schema.js";
import { questionsDB } from "../../DBMS/schema/questionDB.schema.js";

export default class qtnController{


    addQtn(req,res)
    {
        var qtnText = req.body.qtnText;
        try{
        async function create(){
        var add = await questionsDB.create({
            question:qtnText
        });
        if(add)
        {res.status(201).send('question added for polling'+add)}}
        create()
    }catch{console.error('error while adding question to database')}
    };



    deleteQtn(req, res) {
        var qtnId = req.params.qtnId;
        
            async function findOptns() {
                try {
                    var optns = await optionsDB.find({ qtnId: qtnId });
                    return optns;
                } catch (err) {
                    console.error('Error finding options:', err);
                    throw err;
                }
            }
        
            async function main() {
                try {
                    var optns = await findOptns();
                    return optns
                } catch (err) {
                    console.log('Error fetching question and its options:', err);
                    res.status(500).send("Internal Server Error");
                }
            }
        
            async function isVoted()
            {
                try{
                    var optns = await main();
                    var votedOtn = optns.find(u=>u.vote>0);
                    if(votedOtn)
                    {
                        return 1
                    };
                    return await questionsDB.findByIdAndDelete(qtnId)
                }catch (err) {
                    console.log('Error deleting question:', err);
                    res.status(500).send("Internal Server Error");
                }
            };
            async function isDeleted()
            {
                try{
                    var deletedQtn = await isVoted();
                    if(deletedQtn==1)
                    {res.status(400).send('Voted question cant be deleted')}
                    else if(deletedQtn)
                    {res.status(200).send('Question deleted successfully')}
                    else{res.status(400).send('Question not found !')}
                }catch(err){console.log("error in deleting question:",err);res.status(500).send("Internal server error")}
            };
            isDeleted();
        }
    
    displayQtn(req, res) {
        var qtnId = req.params.qtnId;
    
        async function findQtn() {
            try {
                var qtns = await questionsDB.find({ _id: qtnId });
                return qtns;
            } catch (err) {
                console.error('Error finding question:', err);
                throw err;
            }
        }
    
        async function findOptns() {
            try {
                var optns = await optionsDB.find({ qtnId: qtnId });
                return optns;
            } catch (err) {
                console.error('Error finding options:', err);
                throw err;
            }
        }
    
        async function main() {
            try {
                var qtns = await findQtn();
                var optns = await findOptns();
                res.status(200).send({ questions: qtns, options: optns });
            } catch (err) {
                console.log('Error fetching question and its options:', err);
                res.status(500).send("Internal Server Error");
            }
        }
    
        main();
    }
    
    
};