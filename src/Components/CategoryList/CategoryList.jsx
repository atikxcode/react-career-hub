import { useEffect, useState } from "react";
import List from "../List/List";


const CategoryList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setLists(data))
  },[])
  return (
    <div className="container mx-auto my-24">
     <div className="flex flex-col"> 
     <div className="flex flex-col items-center mb-8">
     <h2 className="text-5xl text-[#1A1919] font-extrabold mb-4">Job Category</h2>
      <p className="text-[#757575] text-[16px] font-medium leading-[26px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
     </div>
     <div className="grid grid-cols-4 gap-8">
      {
        lists.map(list => <List key={list.id} list={list}></List>)
      }
     </div>
     </div>
    </div>
  );
};

export default CategoryList;