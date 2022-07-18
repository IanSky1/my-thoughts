// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        thoughts: [Thought]
    }
    `;

// export the typeDefs
module.exports = typeDefs;

// Remember that with GraphQL, we access our API through two passages: queries and mutations. 
// To define a query, you use the type Query {} data type, which is built into GraphQL
// From there, you can define your different types of queries by naming them, just as you would name a function in JavaScript.
// GraphQL has built-in data types known as scalars.