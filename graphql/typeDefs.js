// const { gql } = require("@apollo/server")

module.exports = `#graphql
  type Recipe {
    name: String
    desc: String
    createdAt: String
    thumbsUp: Int
    thumbsDown: Int
  }

  input RecipeInput {
    name: String
    desc: String
  }

  type Query {
    recipe(id: ID!): Recipe!
    getNRecipes(amount: Int): [Recipe]
  }

  type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(id: ID!): Boolean
    editRecipe(id: ID!, recipeInput: RecipeInput): Boolean
  }
`
