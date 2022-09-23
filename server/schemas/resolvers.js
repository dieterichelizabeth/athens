const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// Queries and Mutations for Mongoose models
const resolvers = {
  Query: {
    testRun: () => {
      return "tada!!";
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      console.log(context.user);
      throw new AuthenticationError("You are not logged in !!!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
