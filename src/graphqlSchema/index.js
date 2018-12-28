import { gql } from 'apollo-server-express';
import complimentSchema from './Compliment';

const linkSchema = gql`  
    scalar Date
    
    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    type Subscription {
        _: Boolean
    }
`;

export default [
  linkSchema,
  complimentSchema
];


