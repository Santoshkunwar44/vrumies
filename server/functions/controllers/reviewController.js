const ReviewModel = require("../model/ReviewModel");

class ReviewController{
    async addReview(req,res){
        try {
                let  newReview = await    ReviewModel.create(req.body);
                newReview = await newReview.populate(["user","owner"]);
                
                res.status(200).json({message:newReview,success:true})
        } catch (error) {
                res.status(500).json({message:error.message,success:false})
        }

    }
    async getUsersReview(req,res){
        const {owner} = req.query;

            try {
                if( !owner) throw "field missing";

                const reviews = await ReviewModel.find({owner}).populate(["user","owner"]).sort({createdAt:-1})
                res.status(200).json({message:reviews,success:true})

        } catch (error) {
                    res.status(500).json({message:error.message,success:false})            
        }

    }
}
module.exports = new ReviewController();