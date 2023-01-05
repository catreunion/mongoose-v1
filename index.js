const { ApolloServer } = require("@apollo/server")
const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")
const mongoose = require("mongoose")

// const MONGODB = "mongodb+srv://isaac:8-!pQoXyzFzg4P@cluster0.k2tca6i.mongodb.net/?retryWrites=true&w=majority"
const MONGODB = "mongodb+srv://isaac:ynUJJu9a9guZH279@cluster0.k2tca6i.mongodb.net/?retryWrites=true&w=majority"

const server = new ApolloServer({
  typeDefs,
  resolvers
})

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection successful.")
    return server.listen({ port: 5000 })
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`)
  })
