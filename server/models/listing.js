const mongoose = require ('mongoose');

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      
    },
    discountPrice: {
      type: Number,
      
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      
    },
    parking: {
      type: Boolean,
      
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      
    },
    imageUrls: {
      type: Array,
      
    },
    userRef: {
      type: String,
      
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports= Listing;