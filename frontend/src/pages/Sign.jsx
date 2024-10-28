import React from "react";
import BottomWarning from "../components/BottomWarning";
import ButtonBox from "../components/ButtonBox";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Sideheading from "../components/Sideheading";

const Sign = () => {
  return (
    <div className="flex bg-gray-400 h-screen justify-center ">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 h-max p-2 px-4 text-center shadow-md">
          <Heading label={"Sign in"} />
          <Sideheading
            label={"Enter your details and login into your account"}
          />
          <InputBox label={"UserName/Email"} placeholder={"email/username"} />
          <InputBox label={"Password"} placeholder={"Password"} />
          <div className="pt-6"><ButtonBox label={"Sign in"} /></div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};

export default Sign;