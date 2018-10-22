// This file connects to the remote prisma DB and gives us the ability to query it with javascript

const { Prisma } = require('prisma-binding');

const db = new Prisma({
  // Which mutations and types can prisma-binding use
  typeDefs: 'src/generated/prisma.graphql',
  // Connection to prisma
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  // determines wheter you want to console.log all queries
  debug: false
});

module.exports = db;
