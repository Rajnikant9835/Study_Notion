import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = ({ SetisLoggedIn }) => {
  // for formdata value
  const [formData, setformData] = useState({ email: " ", password: "" });

  //for navigation
  const navigate = useNavigate();

  //for showing password or not
  const [showPassword, setShowPassword] = useState(false);

  //for change handler
  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  //for submiit the form
  function submitHandler(event) {
    event.preventDefault();
    SetisLoggedIn(true);
    toast.success("Logged In");
    console.log("Printing the FormData");
    console.log(formData);
    navigate("/dashboard");
  }
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className=" flex flex-col w-full gap-y-4 mt-6"
      >
        {/* in email input with name attach write this way input under the label  */}
        <label className="w-full">
          <p className="text-[0.875ren=m] text-white mb-1 leading-[1.375rem] ">
            Email Address <sup className="text-red-500">*</sup>
          </p>

          <input
            required
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            className="bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px] "
          />
        </label>

        {/* for password input  */}
        <label className="w-full relative">
          <p className="text-[0.875ren=m] text-white mb-1 leading-[1.375rem] ">
            Password <sup className="text-red-500">*</sup>
          </p>

          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={formData.password}
            onChange={changeHandler}x
            name="password"
            className="bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px] "
          />

          {/* for show password icon hide  */}
          {/* this onclick using toggle the prev true and false */}
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
          <Link to="#" >
            <p className="text-sm  text-blue-600 max-w-max ml-auto">Forgot Password</p>
          </Link>
        </label>

        {/* for button  */}
        <button className="bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">Sign In</button>
      </form>
    </div>
  );
};
