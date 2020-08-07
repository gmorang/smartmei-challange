import React from 'react';
import { useQuery } from '@apollo/client';
import schemas from '../../schemas';

const ListJobs: React.FC = () => {
  const { LIST_JOBS } = schemas.jobs;
  const { loading, error, data } = useQuery(LIST_JOBS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <h3>Hello World</h3>
  );
}

export default ListJobs;
