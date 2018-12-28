import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import schema from './graphQLSchema';
import resolvers from './resolvers';
import { Compliment } from './models/Compliment';
import { connect } from './db/index';
import { router } from './router';

const dotenv = require('dotenv');

dotenv.config();

const app = express();

// god damn cors
app.use(cors());

app.use(bodyParser.json());

// create mongodb connection
connect();

//routes
router(app);

const PORT = process.env.PORT  || 4000;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async({ req }) => {
    return {
      Compliment
    }
  },
  introspection: true,
});
server.applyMiddleware({ app });


app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);

