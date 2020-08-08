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
    <div style={{ padding: 24 }}>
      {data && data.jobs?.map((job) => {
        console.log(job);
        return (
          <JobITem
            key={job.id}
            title={job.title}
            isFeautured={job.isFeatured}
            description={job.description}
            slug={job.slug}
            postedAt={job.postedAt}
            locationNames={job.locationNames}
          />
        )
      })}
    </div>
  );
}

export default ListJobs;
