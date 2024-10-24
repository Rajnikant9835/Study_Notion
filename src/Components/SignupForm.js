import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SignupForm = ({ SetisLoggedIn }) => {
  //for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  //for show password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  //for navigate after created account
  const navigate = useNavigate();

  //for submit the form and password
  function submitHandler(event) {
    event.preventDefault();
    if (formData.createPassword !== formData.confirmPassword) {
      toast("password do not match");
    }
    SetisLoggedIn(true);
    toast.success("Account created");

    const accountData ={
      ...formData
    };

    const finalData ={
      ...accountData ,
      accountType
    }

    console.log("Printing Final account Data");
    console.log(finalData);
    navigate("/dashboard");
  }

  //for change handler

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      <div className="flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max">

        {/* for switching tab student to Instructor  */}
        <button
          className={`${
            accountType === "student"
              ? "bg-black text-white "
              : "bg-transparent text-white"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "student"
              ? "bg-transparent text-white"
              : "bg-black text-white "
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* for first name and last name  */}
        <div className="flex gap-x-4 mt-4">
          {/* for first name  */}
          <label className="w-full">
            <p className="text-[0.875ren=m] text-white mb-1 leading-[1.375rem] ">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={changeHandler}
              name="firstName"
              className="bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px] "
            />
          </label>

          {/* for last name */}

          <label className="w-full">
            <p className="text-[0.875ren=m] text-white mb-1 leading-[1.375rem] ">
              Last Name <sup className="text-red-500">*</sup>
            </p>

            <input
              required
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={changeHandler}
              name="lastName"
              className="bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px] "
            />
          </label>
        </div>

        {/* for email address */}
        <label className="w-full mt-4">
          <p className="mt-4  text-[0.875ren=m] text-white mb-1 leading-[1.375rem] ">
            Email Address <sup className="text-red-500">*</sup>
          </p>

          <input
            required
            type="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            className="bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px] "
          />
        </label>

        {/* for create and confirm password  */}
        <div className="flex gap-x-4 mt-4">
          {/* for create password  */}
          <label className="relative w-full">
            <p className="text-[0.875ren=m] text-white mb-1 leading-[1.375rem] ">
              Create Password <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.createPassword}
              name="createPassword"
              className="bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px] "
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          {/* for confirm password  */}
          <label className="relative w-full">
            <p className="text-[0.875ren=m] text-white mb-1 leading-[1.375rem] ">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={changeHandler}
              className="bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px] "
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* for signin button  */}
        <button className=" w-full bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};
