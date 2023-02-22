const { User } = require('../models/User');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query:{
        me: async (parent, args, context) =>{
            if (context.user) {
                const data = await User.findOne({
                    _id: context.user._id
                }).select('-__v -password');
                return data;
            }
            throw new AuthenticationError('Log in is Required');
        }
    },

    Mutation:{
        
        addUser: async (parent, args) =>{
            const user = await User.create({args});
            const token = signToken(user);
            return { token, user};
        },

        login: async(parent,{email, password}) =>{
            const user = await User.findOne({email});

            if (!user){
                throw new AuthenticationError("No email on file")
            }
            
            const truePassword = await user.isCorrectPassword(password);

            if (!truePassword){
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user);
            return {token, user};
        }
    }
}