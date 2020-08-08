import React from 'react';
import { useQuery } from '@apollo/client';
import Pagination from '@material-ui/lab/Pagination';

import schemas from '../../schemas';
import JobITem from '../../components/Job';
import { Job } from '../../@types';

interface Data {
  jobs?: Job[];
}

const ListJobs: React.FC = () => {
  const { LIST_JOBS } = schemas.jobs;
  const { loading, error, data } = useQuery<Data>(LIST_JOBS);
  const limit = 10;

  const [total, setTotal] = React.useState<number>(0);
  const [pages, setPages] = React.useState<number>(0);
  const [currentPage, setCurrent] = React.useState(1);

  const indexFirstJob = currentPage * limit;
  const indexLastJob = indexFirstJob - limit;
  const currentJobs = data?.jobs?.slice(indexLastJob, indexFirstJob)

  function handlePage(e: any, page: number) {
    setCurrent(page)
  }

  React.useEffect(() => {
    async function setPagination() {
      const jobs = data?.jobs!;

      setTotal(jobs?.length);

      const totalPages = Math.ceil(total / limit);

      setPages(totalPages);
    }

    setPagination();
  }, [data, total, limit])

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{ padding: 24 }}>
      <div style={{ margin: '16px 0' }}>
        <Pagination count={pages} onChange={handlePage} />
      </div>

      {currentJobs && currentJobs?.map((job) => {
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

      <Pagination count={pages} onChange={handlePage} />
    </div>
  );
}

export default ListJobs;
