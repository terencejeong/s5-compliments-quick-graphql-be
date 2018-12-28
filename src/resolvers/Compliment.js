import { format, lastDayOfWeek } from 'date-fns';

export default {
  Query: {
    compliments: async (parent, { cursor, limit = 100}, { Compliment }) => {
      const cursorOptions = cursor ? { lastDayOfWeek: cursor } : {};

      const compliments = await Compliment.find({
        ...cursorOptions
      })
        .sort([['lastDayOfWeek', 'descending']])
        .limit(limit + 1)
        .exec();

      const hasNextPage = compliments.length > limit;
      const edges = hasNextPage ? compliments.slice(0 , -1) : compliments;

      return {
        edges,
        pageInfo: {
          hasNextPage,
          endCursor: format(edges[edges.length -1].lastDayOfWeek)
        },
      }
    }
  }
}

