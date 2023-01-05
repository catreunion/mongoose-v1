[Get started with Apollo Server - Apollo GraphQL Docs](https://www.apollographql.com/docs/apollo-server/getting-started)

yarn init --yes
yarn add @apollo/server graphql
yarn add nodemon mongoose

```json title="package.json"
{
  "name": "mongo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@apollo/server": "^4.3.0",
    "graphql": "^16.6.0",
    "mongoose": "^6.8.2",
    "nodemon": "^2.0.20"
  },
  "scripts": {
    "start": "nodemon index.js"
  }
}
```
