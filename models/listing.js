const mongoose = require("mongoose");
const Review = require("./review.js");
const { ref } = require("joi");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title:{
    type:String,
    required:true,
    },
    description :{
     type:String,
    required:true,
    },
    
         image: {
        url:String,
        filenaname:String, 
        },
        //     filename: {
        //         type: String,
        //         default: ""  // Provide a default value if needed
        //     },
        //     url: {
        //         type: String,
        //         default: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //     }
        // },
       
   
        // type:String,
        // default:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // set:(v) => v===""? "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" : v,
        // },
        price:Number,
        location:String,
        country:String,
        reviews:[
            {
                type:Schema.Types.ObjectId,
                ref:"Review"

            },
        ],
        owner:{
            type:Schema.Types.ObjectId,
            ref: "User",
        },
    
});
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});

    }
  

});

const Listing= mongoose.model("listing" ,listingSchema);
module.exports= Listing;