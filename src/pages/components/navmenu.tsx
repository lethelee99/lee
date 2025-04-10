const NaveMenu = () => {
  return (
    <div className="flex  items-center justify-center  p-4 h-full w-full ">
      <div className="flex items-center w-[80%] justify-between">
        <div className="flex border-4 text-2xl font-bold border-black rounded-lg  bg-white">
          <p className="">Da</p>
          <p className="bg-black text-white">LEE</p>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <p className="text-lg font-semibold hover:bg-black hover:text-white px-2 hover:rounded-lg">
            HOME
          </p>
          <p className="text-lg font-semibold hover:bg-black hover:text-white px-2 hover:rounded-lg">
            PROFILE
          </p>
          <p className="text-lg font-semibold hover:bg-black hover:text-white px-2 hover:rounded-lg">
            SKILLS
          </p>
          <p className="text-lg font-semibold hover:bg-black hover:text-white px-2 hover:rounded-lg">
            CONTACTS
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default NaveMenu;
