import { gql } from '@apollo/client';

export const LIST_JOBS = gql`
  query {
    jobs {
      id
      locationNames
      title
      isFeatured
      isPublished
      userEmail
      description
      remotes {
        name
        type
        slug
      }
    }
  }
`;
