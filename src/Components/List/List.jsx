

const List = ({list}) => {
  const {logo, category_name, availability} = list;
  return (
    <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-8 rounded-lg">
     <img  src={logo} alt="" />
     <h2 className="text-[#474747] text-xl font-extrabold mt-8 mb-2">{category_name}</h2>
     <p className="text-[#A3A3A3] text-[16px] leading-[26px] font-medium">{availability}</p>
    </div>
  );
};

export default List;