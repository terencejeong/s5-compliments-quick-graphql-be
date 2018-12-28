import { gql } from 'apollo-server-express';

export default gql`
  type Compliment {
      id: ID!
      compliment: String!,
      toStaffMember: String!,
      timestamp: Date!,
      lastDayOfWeek: Date!,
  }
  
  extend type Query {
      compliments(cursor: String, limit: Int): ComplimentConnection!
  }
  
  type ComplimentConnection {
      edges: [Compliment!]
      pageInfo: PageInfo!
  }
  
  type PageInfo {
      hasNextPage: Boolean!
      endCursor: Date!
  }
`
