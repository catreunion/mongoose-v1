const Recipe = require("../models/Recipe")

module.exports = {
  Query: {
    async recipe(_, { id }) {
      return await Recipe.findById(id)
    },
    async getNRecipes(_, { amount }) {
      return await Recipe.find().sort({ createdAt: -1 }).limit(amount)
    }
  },
  Mutation: {
    async createRecipe(_, { recipeInput: { name, desc } }) {
      const createdRecipe = new Recipe({
        name: name,
        desc: desc,
        createdAt: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0
      })

      const res = await createdRecipe.save()
      console.log(res._doc)

      return {
        id: res.id,
        ...res._doc
      }
    },

    async deleteRecipe(_, { id }) {
      const wasDeleted = (await Recipe.deleteOne({ _id: id })).deletedCount
      return wasDeleted
    },

    async editRecipe(_, { id, recipeInput: { name, desc } }) {
      const wasEdited = (await Recipe.updateOne({ _id: id }, { name: name, desc: desc })).modifiedCount
      return wasEdited
    }
  }
}
