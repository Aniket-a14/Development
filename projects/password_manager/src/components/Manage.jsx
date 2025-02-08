import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manage = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
    desc: "",
  });
  const [passarray, setPassArray] = useState([]);
  const [errors, setErrors] = useState({});
  const [inputType, setInputType] = useState("password");

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPassArray(JSON.parse(passwords));
    }
  }, []);

  const showpassword = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const savePass = () => {
    const newPassArray = [...passarray, form];
    setPassArray(newPassArray);
    localStorage.setItem("passwords", JSON.stringify(newPassArray));
    setForm({ site: "", username: "", password: "", desc: "" });
  };

  const deletePass = (indexToDelete) => {
    const newPassArray = passarray.filter((_, index) => index !== indexToDelete);
    setPassArray(newPassArray);
    localStorage.setItem("passwords", JSON.stringify(newPassArray));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.value.trim() !== "") {
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: null }));
    }
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!form.site.trim()) {
      newErrors.site = "This field is required";
    }
    if (!form.username.trim()) {
      newErrors.username = "This field is required";
    }
    if (!form.password.trim()) {
      newErrors.password = "This field is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast("PassWord saved successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    setErrors({});
    savePass();
  };

  return (
    <>
      <div className="max-w-1/2 flex">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div className="relative container flex flex-col mt-7 w-[50vw] rounded-xl min-h-[60vh] bg-[rgba(255,255,255,.35)] ml-10">
          <div className="w-full text-center pt-3 text-lg font-semibold bg-[rgba(255,255,255,.25)] rounded-t-xl">
            <p className="mb-2 text-white">Save Credentials</p>
          </div>
          <form className="px-3 py-6 transition-all duration-200">
            <div className="transition-all duration-200">
              <p className="font-semibold size-7 w-full text-white">SiteName</p>
              <input
                value={form.site}
                onChange={handleChange}
                type="text"
                name="site"
                placeholder="Link of the site you want to save"
                className={`bg-[rgba(255,255,255,.0)] w-[25vw] text-white border-b outline-none text-sm ${
                  errors.site ? "border-red-500" : ""
                }`}
              />
              {errors.site && (
                <p className="text-red-500 text-sm mt-1">{errors.site}</p>
              )}
            </div>

            <div className="mt-5 transition-all duration-200">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <p className="font-semibold text-white text-base w-full">
                    UserName
                  </p>
                  <input
                    value={form.username}
                    onChange={handleChange}
                    type="text"
                    name="username"
                    placeholder="Enter UserName"
                    className={`bg-transparent border-b text-white outline-none mt-2 text-sm ${
                      errors.username ? "border-red-500" : ""
                    }`}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-white text-base w-full">
                    PassWord
                  </p>
                  <div className="relative">
                    <input
                      value={form.password}
                      onChange={handleChange}
                      type={inputType}
                      name="password"
                      placeholder="Enter Password"
                      className={`bg-transparent border-b text-white mt-2 outline-none text-sm ${
                        errors.password ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={showpassword}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                      <img
                        ref={ref}
                        className="size-4 mt-2"
                        src={
                          inputType === "password"
                            ? "/icons/open.svg"
                            : "/icons/close.svg"
                        }
                        alt="Toggle Password Visibility"
                      />
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="font-semibold text-white size-7 w-full">
                Description
              </p>
              <input
                type="text"
                value={form.desc}
                onChange={handleChange}
                placeholder="Remarks"
                name="desc"
                className="bg-[rgba(255,255,255,.0)] text-white border-b outline-none text-sm w-[30vw]"
              />
            </div>

            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex font-semibold justify-center text-white p-1 px-5 rounded-md bg-[rgba(255,255,255,.45)]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="text-white flex flex-col relative mt-6 ml-20">
          <p className="mt-4 font-semibold">Your Saved PassWords</p>
          {passarray.length === 0 ? (
            <div className="container flex mt-5 w-[24vw]">
              No PassWords to Display, Save to continue!
            </div>
          ) : (
            <div className="mt-7 overflow-hidden rounded-xl">
              <table className="table-auto border-separate border-spacing-2 w-full">
                <thead className="bg-[rgba(255,255,255,.35)]">
                  <tr>
                    <th className="px-4">Site</th>
                    <th className="px-4">UserName</th>
                    <th className="px-4">Password</th>
                    <th className="px-4">Description</th>
                    <th className="px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {passarray.map((pass, index) => (
                    <tr key={index}>
                      <td className="px-4">{pass.site}</td>
                      <td className="px-4">{pass.username}</td>
                      <td className="px-4">{pass.password}</td>
                      <td className="px-4">{pass.desc}</td>
                      <td className="px-4">
                        <button
                          onClick={() => deletePass(index)}
                          className="text-white py-2 px-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            color="rgb(255,255,255)"
                            fill="none"
                          >
                            <path
                              d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M9.5 16.5L9.5 10.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M14.5 16.5L14.5 10.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manage;
