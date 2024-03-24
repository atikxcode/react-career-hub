import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data));
  }, [])

  return (
    <div className="container mx-auto mb-8">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-5xl text-[#1A1919] font-extrabold mb-4">Featured Jobs</h2>
        <p className="text-[#757575] text-[16px] leading-[26px] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
        {
          jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
        </div>
        <div className="flex justify-center mt-10">
     <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] pt-[11px] pb-[11px] pr-[18px] pl-[18px] text-xl font-extrabold text-white rounded-lg">See All Jobs</button>

     </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;