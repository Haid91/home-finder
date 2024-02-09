const mongoose = require ('mongoose');
const {Schema}=require("mongoose")
const listingSchema = new mongoose.Schema(
  {
    channel: {
      type: String,
      
    },
    description: {
      type: String,
      required: true,
    },
     
    priceRange: {
      type: String,
      
    },
    listingId: {
      type: String
    }
    
  },
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports= Listing;