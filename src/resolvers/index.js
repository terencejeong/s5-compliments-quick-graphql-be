import { GraphQLDateTime } from 'graphql-iso-date';
import complimentResolver from './Compliment';

const customScalarResolver = {
  Date: GraphQLDateTime
};

export default [
  customScalarResolver,
  complimentResolver
]
