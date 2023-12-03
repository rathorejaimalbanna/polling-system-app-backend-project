import { optionsDB } from "../../DBMS/schema/optionDB.schema.js";
import { questionsDB } from "../../DBMS/schema/questionDB.schema.js";

export default class optController{
    appOpt(req, res) {
        var qtnId = req.params.qtnId;
        var option = req.body.option;
    
        async function add() {
            try {
                var added = await optionsDB.create({
                    option: option,
                    vote: 0,
                    vote_link: '',
                    qtnId: qtnId
                });
                return added;
            } catch (error) {
                console.error('Error adding option:', error);
                throw error;
            }
        }
    
        async function update(added) {
            try {
                var opt_id = added._id;
                added.vote_link = "localhost:3200/api/options/vote/" + opt_id;
                var updated = await optionsDB.findByIdAndUpdate(opt_id, { $set: { vote_link: added.vote_link } }, { new: true });
                return updated;
            } catch (error) {
                console.error('Error updating option:', error);
                throw error;
            }
        }
    
        async function main() {
            try {
                var added = await add();
                var updated = await update(added);
                return res.status(200).send("Option added successfully:  "+ updated);
            } catch (error) {
                return res.status(500).send({ error: 'Internal Server Error' });
            }
        }
    
        main();
    }
    
    deleteOpt(req,res)
    {
        var optId = req.params.optId;
        
            async function findOptn() {
                try {
                    var optn = await optionsDB.find({ _id: optId });
                    return optn;
                } catch (err) {
                    console.error('Error finding options:', err);
                    throw err;
                }
            }
        
            async function main() {
                try {
                    var optn = await findOptn();
                    if(optn)
                    {return optn}
                    return res.status(400).send('Option not found')
                } catch (err) {
                    console.log('Error fetching question and its options:', err);
                    res.status(500).send("Internal Server Error");
                }
            }
        
            async function isVoted()
            {
                try{
                    var optn = await main();
                    var votedOtn = optn.find(u=>u.vote>0);
                    if(votedOtn)
                    {
                        return false
                    };
                    return await optionsDB.findByIdAndDelete(optId)
                }catch (err) {
                    console.log('Error deleting question:', err);
                    res.status(500).send("Internal Server Error");
                }
            };
            async function isDeleted()
            {
                try{
                    var deletedOptn = await isVoted();
                    if(!deletedOptn)
                    {res.status(400).send('Voted option cant be deleted')}
                    else
                    {res.status(200).send('Option deleted successfully')}
                }catch(err){console.log("error in deleting option:",err);res.status(500).send("Internal server error")}
            };
            isDeleted();
    };

    vote(req,res)
    {
        var optId = req.params.optId;
        async function voted()
        {   try{
             await optionsDB.findByIdAndUpdate(optId,{$inc:{vote:1}},{new:true});
        }
            catch(err){console.error("error adding vote")};
        };
        
        async function returnOpt()
        {
            try{
                await voted();
                res.status(200).send("vote added successfully")
            }catch(err){console.error('error while receiving voted')}
        };
        returnOpt();
    }

    
}