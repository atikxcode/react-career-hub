import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter => {
    if(filter === 'all'){
      setDisplayJobs(appliedJobs);
    }
    else if (filter === 'remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    }
    else if(filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
  }
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if(jobs.length > 0){
      // const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
      const JobsApplied = [];
      for(const id of storedJobIds){
        const job = jobs.find(job => job.id === id);
        if(job){
          JobsApplied.push(job)
        }
      }
      setAppliedJobs(JobsApplied);
      setDisplayJobs(JobsApplied);
      // console.log(jobs, storedJobIds, JobsApplied)
    }
  }, [jobs])
  return (
    <div className="container mx-auto my-24">
      
      <div className="flex justify-center mb-20">
      <h2 className="text-[#1A1919] text-[32px] font-extrabold">Applied Jobs</h2>
      </div>
      <div className="flex justify-end mb-8">
        <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
          <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
          <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
          
        </ul>
        </details>
      </div>
      <div className="container mx-auto">
      {
        displayJobs.map(job => <AppliedJob key={appliedJobs.id} job={job}></AppliedJob>)
      }
      </div>
      
    </div>
  );
};

export default AppliedJobs;