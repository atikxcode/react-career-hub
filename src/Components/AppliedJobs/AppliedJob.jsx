import React from 'react';

const AppliedJob = ({job}) => {
  const {logo, job_title, company_name, remote_or_onsite, location, salary} = job;
  return (
    <div>
      <div className='flex'>
      <div>
      <img src={logo} alt="" />
      </div>
      <div className='flex flex-col'>
      <h2>{job_title}</h2>
      <p>{company_name}</p>
      <div className='flex'>
        <button>{remote_or_onsite}</button>
        <button>Full Time</button>
      </div>
      <div className='flex'>
        <p>{location}</p>
        <p>salary</p>
      </div>
      </div>
      <div>
        <button>View Details</button>
      </div>
      </div>
    </div>
  );
};

export default AppliedJob;