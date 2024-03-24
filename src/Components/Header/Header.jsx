import { NavLink } from "react-router-dom";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const notify = () => toast("Wow so easy!");
const Header = () => {
  return (
    
<div className="container mx-auto mt-5 ">
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/applied">Applied Jobs</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/applied">Applied Jobs</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a onClick={notify} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] pt-[15px] pb-[15px] pr-[30px] pl-[30px] rounded-[8px] text-white text-[20px] font-extrabold">Star Applying</a>
  </div>
</div>
<ToastContainer />
    </div>
   
    
    
  );
};

export default Header;