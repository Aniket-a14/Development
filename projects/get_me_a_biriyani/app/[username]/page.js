import React from "react";

const Username = ({ params }) => {
  const username = params?.username || "User Name";
  return (
    <>
      <div className="flex flex-col relative justify-center items-center">
        <img
          className=" h-[40vh] w-4/5 rounded-lg "
          src="https://media.licdn.com/dms/image/v2/D5616AQE8rn8eOsWD8g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1729411281794?e=1744848000&v=beta&t=Ucej61PSuCp3d5BzFVr12rv5U-VDjF0E2YHXCltEC6k"
          alt=""
        />
        <div className="flex relative justify-center bottom-8">
          <img
            height={70}
            width={70}
            className="rounded-full border-2"
            src="https://media.licdn.com/dms/image/v2/D5603AQHnawdVSgcdJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692678267040?e=1744848000&v=beta&t=aot3rR_rRysmEJ4DFTwWG6RaIiP9K7qwrAd0fZCuJzU"
            alt=""
          />
        </div>
        <div className="text-center flex flex-col relative bottom-5 gap-3">
          <h4 className="text-base font-semibold text-white">
            @{username}
          </h4>
          <p className="text-sm text-white">
            Software Developer | Tech Enthusiast
          </p>
        </div>
        <div className="flex w-[80%] gap-5">
          <div className="w-1/2">
            <ul>
              <li>Abc donated $20</li>
              <li>Abc donated $20</li>
              <li>Abc donated $20</li>
              <li>Abc donated $20</li>
              <li>Abc donated $20</li>
            </ul>
          </div>
          <div className="w-1/2">
            lkvnervnr
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
