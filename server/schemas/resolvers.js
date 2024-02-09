const { User, Listing } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
  Query: {
    
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('listings');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addListing: async (parent, { channel, description, priceRange, listingId }, context) => {
      if (context.user) {
        const listing = await Listing.create({
         channel, description, priceRange, listingId
        });

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { listings: listing._id } }
        );

        
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    
    removeListing: async (parent, { listingId }, context) => {
      if (context.user) {
        console.log (listingId)
        const listing = await Listing.findOneAndDelete({
          _id: listingId
          
        });

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { listings: {listingId} } }
        );

       
      }
      throw AuthenticationError;
    },
    
  },
};

module.exports = resolvers;
