import React from "react";

const Manage = () => {
  return (
    <div className="max-w-1/2 flex">
      <div className="relative container flex justify-between items-start mt-16 w-[50vw] rounded-xl min-h-[60vh] bg-[rgba(255,255,255,.35)] ml-10">
        <div className="">
          <div className="absolute top-0 w-full text-center pt-3 text-lg font-semibold bg-[rgba(255,255,255,.25)] rounded-t-xl">
            <p className="mb-2 text-white">Save Credentials</p>
          </div>

          <form className="absolute left-3 top-24 w-full transition-all duration-200">
            <div className="transition-all duration-200">
              <p className="font-semibold size-7 w-full text-white">SiteName</p>
              <input
                type="text"
                placeholder="Link of the site you want to save"
                className="bg-[rgba(255,255,255,.0)] w-[25vw] text-white border-b outline-none text-sm"
              />
            </div>

            <div className="mt-5 transition-all duration-200">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <p className="font-semibold text-base w-full">UserName</p>
                  <input
                    type="text"
                    placeholder="Enter UserName"
                    className="bg-transparent border-b text-white outline-none mt-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-base w-full">PassWord</p>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="bg-transparent border-b text-white mt-2 outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="font-semibold size-7 w-full">Description</p>
              <input
                type="text"
                placeholder="Remarks"
                className="bg-[rgba(255,255,255,.0)] text-white border-b outline-none text-sm w-[30vw]"
              />
            </div>

            <div className="mt-5 flex justify-center mr-6"></div>
          </form>
        </div>
      </div>
      <div className="text-white flex relative mt-16 ml-10">
        
      </div>
    </div>
  );
};

export default Manage;
