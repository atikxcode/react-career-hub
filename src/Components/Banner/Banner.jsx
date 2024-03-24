import './Banner.css'

const Banner = () => {
  return (
    <div className="my-10 bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] p-8">
     <div className="flex justify-between container mx-auto">
     <div className="flex flex-col">
      <h2 className="mb-6 w-[570px] text-[#1A1919] text-[80px] font-extrabold leading-[100px]">One Step Closer To Your <span className="gradient-text">Dream Job</span></h2>
      <p className='text-[#757575] text-lg w-[519px] leading-[30px] font-medium mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      <div>
      <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] pt-[19px] pb-[19px] pr-[28px] pl-[28px] rounded-[8px] text-white text-[20px] font-extrabold'>Get Started</button>

      </div>
      </div>
      <div>
        <img className="w-[550px] h-[500px] relative bottom-[-44px]" src="/src/assets/images/user.png" alt="" />
      </div>
     </div>
    </div>
  );
};

export default Banner;