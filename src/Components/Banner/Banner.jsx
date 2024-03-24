

const Banner = () => {
  return (
    <div className="my-10">
     <div className="flex justify-between">
     <div className="flex flex-col">
      <h2 className="w-[570px] text-[#1A1919] text-[80px] font-extrabold leading-[100px]">One Step Closer To Your <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent">Dream Job</span></h2>
      <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      <button>Get Started</button>
      </div>
      <div>
        <img className="w-[550px] h-[500px]" src="/src/assets/images/user.png" alt="" />
      </div>
     </div>
    </div>
  );
};

export default Banner;