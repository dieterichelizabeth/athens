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
        const userData = await User.findOne({ _id: context.user._id }).populate(
          "savedBooks"
        );
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);

      if (!user) {
        throw new AuthenticationError(
          "This email is not associated to an existing account!"
        );
      }

      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        throw new AuthenticationError(
          "Sorry, the password you entered is incorrect. Please try again."
        );
      }

      console.log("Valid User Found and Password provided!");

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: { ...args } } },
          { new: true }
        );
        return updatedUser;
      }

      throw new AuthenticationError("You must be logged in to save a book!!");
    },
  },
};

module.exports = resolvers;
