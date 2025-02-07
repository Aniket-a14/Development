"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { InteractiveHoverButton } from "./interactive-hover-button";
import { useState } from "react";

const Contain = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let r = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res= await r.text();
    console.log(res);
    if(r.ok){
      setTimeout(() => {
        setIsSubmitting(false);
        reset();
      }, 2000);
    }else{
      alert("Some error occured!")
    }
  };



  return (
    <div className="relative container flex justify-center items-center mt-16 mx-auto w-[37vw] rounded-xl min-h-[60vh] bg-[rgba(255,255,255,.35)]">
      <div className="absolute top-0 w-full text-center pt-3 text-lg font-semibold bg-[rgba(255,255,255,.25)] rounded-t-xl">
        <p className="mb-2">Contact Us</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute left-3 top-24 w-full transition-all duration-200"
      >
        <div className="transition-all duration-200">
          <p className="font-semibold size-7 w-full">Basic Details</p>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <input
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                placeholder="First Name"
                className="bg-[rgba(255,255,255,.0)] border-b outline-none text-sm"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                {...register("lastName", {
                  required: "Last Name is required",
                  minLength: { value: 3, message: "Min length is 3" },
                  maxLength: { value: 8, message: "Max length is 8" },
                })}
                placeholder="Last Name"
                className="bg-[rgba(255,255,255,.0)] border-b outline-none text-sm"
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 transition-all duration-200">
          <p className="font-semibold size-7 w-full">Phone Number</p>
          <input
            type="text"
            {...register("phone", {
              required: "Contact Number is required",
              minLength: { value: /^[0-9]+$/, message: "Only numbers are allowed" },
            })}
            placeholder="Contact No"
            className="bg-[rgba(255,255,255,.0)] border-b outline-none text-sm"
          />
          {errors.phone && (
            <span className="text-red-500 text-xs ml-5">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="mt-5">
          <p className="font-semibold size-7 w-full">Description</p>
          <input
            type="text"
            {...register("remarks")}
            placeholder="Remarks"
            className="bg-[rgba(255,255,255,.0)] border-b outline-none text-sm w-[30vw]"
          />
        </div>

        <div className="mt-5 flex justify-center mr-6">
          <InteractiveHoverButton
            type="submit"
            disabled={isSubmitting}
            className=" text-black "
          >
            {isSubmitting?"Submitting":"Submit"}
          </InteractiveHoverButton>
        </div>
      </form>
    </div>
  );
};

export default Contain;
