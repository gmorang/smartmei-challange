import React from 'react';
import { useQuery } from '@apollo/client';

import schemas from '../../schemas';
import JobITem from '../../components/Job';
import { Job } from '../../@types';

interface Data {
  jobs?: Job[];
}

const ListJobs: React.FC = () => {
  const { LIST_JOBS } = schemas.jobs;
  const { loading, error, data } = useQuery<Data>(LIST_JOBS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data && data.jobs?.map((job) => (
        <JobITem
          key={job.id}
          title={job.title}
          isFeautured={job.isFeatured}
        />
      ))}
    </div>
  );
}

export default ListJobs;
