import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
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
      // console.log(jobs, storedJobIds, JobsApplied)
    }
  }, [])
  return (
    <div className="container mx-auto my-24">
      <h2>Jobs Applied: {appliedJobs.length}</h2>
      <div>
      {
        appliedJobs.map(job => <AppliedJob key={appliedJobs.id} job={job}></AppliedJob>)
      }
      </div>
      
    </div>
  );
};

export default AppliedJobs;