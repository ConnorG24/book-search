const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        bookCount: Int 
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        authors:[String]
        description: String
        title: String!
        image: String
        link: String
    }

    input BookInput {
        ookId: String!
        authors:[String]
        description: String
        title: String!
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!)
        addUser(username: String!, email: String!, password: String!)
        saveBook(input: BookInput)
        removeBook(bookId: String!)
    }

    type Query {
        me: User
    }

    type Auth{
        Token: ID!
        user: User 
    }


`