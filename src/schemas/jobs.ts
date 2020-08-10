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
      slug
      postedAt
      company {
        slug
      }
      remotes {
        name
        type
        slug
      }
    }
  }
`;

export const APPLY_JOB = gql`
  mutation subscribe ($email: String!, $name: String!) {
    subscribe(input: {name: $name, email: $email}) {
      email
      name
    }
  }
`;

export const GET_JOB = gql`
  query Job($jobSlug: String!, $companySlug: String!){
    job(input: {jobSlug: $jobSlug, companySlug: $companySlug }){
      id
      locationNames
      title
      isFeatured
      isPublished
      userEmail
      description
      slug
      postedAt
      remotes {
        name
        type
        slug
      }
    }
  }
`;
