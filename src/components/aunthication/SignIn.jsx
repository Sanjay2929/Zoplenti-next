"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  CrossIcon,
  ErrorIcon,
  HidePasswordIcon,
  ShowPasswordIcon,
} from "../common/icons/SignIn";
import Link from "next/link";
import { RightArrowIcon } from "../common/icons/Home";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInDetail, setSignInDetail] = useState({
    email: "",
    password: "",
  });
  const [errorShow, setErrorShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSignInDetail({
      email: "",
      password: "",
    });
    // SHOW ERROR FOR EMAIL AND PASSWORD
    setErrorShow(true);
    setToastShow(true);
    // TOAST REMOVE AFTER THREE SECONDS
    // setTimeout(() => {
    //   setToastShow(false);
    // }, 3000);
  };
  return (
    <>
      {/* Main container */}
      <div className="bg-midnight">
        {/* TOAST NOTIFICATION  */}
        <div
          className={`fixed right-0 bottom-5 duration-200 z-50 ${
            toastShow ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="bg-midnight border border-white max-w-[450px] py-4 ps-5 pe-4 rounded-md relative mx-4">
            <span
              onClick={() => setToastShow(false)}
              className="absolute top-2 right-3 cursor-pointer">
              <CrossIcon />
            </span>
            <div className="flex gap-2">
              <span>
                <ErrorIcon />
              </span>
              <div>
                <p className="text-base font-aeoniktrials text-white font-normal leading-tight">
                  Error.
                </p>
                <p className="text-base font-aeoniktrials pt-1 text-white font-normal leading-tight">
                  The username or password you entered is incorrect.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen py-20 lg:py-4 bg-commonbgimage bg-cover bg-no-repeat md:bg-center z-10 flex items-center justify-center p-4 bg-midnight overflow-x-hidden relative">
          {/* Go to home page */}
          <Link
            href="/"
            className="uppercase absolute end-4 top-4 text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[14px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] justify-center">
            <span className="group-hover:translate-x-[-4px] duration-300 rotate-[180deg]">
              <RightArrowIcon />
            </span>
            go to home
          </Link>
          {/* Zoplenti logo */}
          <Image
            className="absolute bottom-[12%] left-1/2 -translate-x-1/2"
            height={425}
            width={334}
            alt="zoplenti-logo"
            src="/assets/images/sign-in/svg/z-logo.svg"
          />
          {/* Left logo image */}
          <Image
            className="absolute w-[86px] sm:w-[130px] md:w-[150px] lg:w-[176px] start-[-50px] md:start-[-55px] lg:start-[-80px]"
            height={142}
            width={176}
            src="/assets/images/hero/png/left-right-logo-image.png"
            alt="logo-left"
          />
          {/* Right logo image */}
          <Image
            className="absolute w-[86px] sm:w-[130px] md:w-[150px] lg:w-[176px] end-[-50px] md:end-[-55px] lg:end-[-80px]"
            height={142}
            width={176}
            src="/assets/images/hero/png/left-right-logo-image.png"
            alt="logo-right"
          />
          {/* Sign-in form container */}
          <div className="w-full max-w-[516px]">
            {/* {errorShow ? (
              <div className="bg-red-200 py-2.5 px-4 mb-4 rounded-md">
                <div className="flex gap-2">
                  <CircleRedCrossIcon />
                  <div>
                    <h4 className="text-base text-black font-aeoniktrials font-bold">
                      Error
                    </h4>
                    <p className="text-black text-[14px] md:text-base font-aeoniktrials">
                      User does not exist.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )} */}

            <div className="w-full py-5 sm:py-7 bg-[rgba(255,_255,_255,_0.01)] blur_filter border border-[rgba(255,_255,_255,_0.20)] rounded-xl">
              <div className="pb-6 border-alto border-b border-opacity-20 flex justify-center">
                {/* Zoplenti main logo link */}
                <Link href="/">
                  <Image
                    className=""
                    height={47}
                    width={58}
                    alt="zoplenti-logo"
                    src="/assets/images/sign-in/svg/main-z-logo.svg"
                  />
                </Link>
              </div>
              <div className="px-5 pt-5 sm:px-7 sm:pt-6">
                {/* Sign-in title */}
                <h3 className="font-aeoniktrials text-white font-normal text-center text-[28px] md:text-3xl lg:text-4xl">
                  Sign In
                </h3>
                {/* Sign-in form inputs */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col pt-4 sm:pt-6">
                  {/* Email input */}
                  <label
                    htmlFor="email_address"
                    className="text-white pb-2 !leading-[170%] font-aeoniktrials font-normal text-base sm:text-lg md:text-xl">
                    Email address
                  </label>
                  <input
                    required
                    id="email_address"
                    name="email"
                    value={signInDetail.email}
                    onChange={(e) =>
                      setSignInDetail({
                        ...signInDetail,
                        email: e.target.value,
                      })
                    }
                    type="email"
                    className={`bg-alto blur_filter outline-none rounded-[6px] font-aeoniktrials px-[14px] py-2.5 text-base md:text-lg !leading-[170%] font-normal text-black text-opacity-[49%] placeholder:text-black placeholder:opacity-[49%]  ${
                      errorShow
                        ? "outline-red-600 outline-offset-0 outline-[.5px]"
                        : ""
                    }`}
                    placeholder="Email address"
                  />
                  {/* Password input */}
                  <label
                    htmlFor="password"
                    className="text-white pt-4 sm:pt-6 md:pt-[30px] pb-2 !leading-[170%] font-aeoniktrials font-normal text-base sm:text-lg md:text-xl">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      required
                      id="password"
                      name="password"
                      value={signInDetail.password}
                      onChange={(e) =>
                        setSignInDetail({
                          ...signInDetail,
                          password: e.target.value,
                        })
                      }
                      type={showPassword ? "text" : "password"}
                      className={`w-full bg-alto blur_filter outline-none rounded-[6px] font-aeoniktrials ps-[14px] py-2.5 text-base md:text-lg !leading-[170%] pe-10 font-normal text-black text-opacity-[49%] placeholder:text-black placeholder:opacity-[49%] ${
                        errorShow
                          ? "outline-red-600 outline-offset-0 outline-[.5px]"
                          : ""
                      }`}
                      placeholder="************"
                    />
                    {/* Password visibility toggle */}
                    <label
                      htmlFor="password"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="absolute right-[14px] top-1/2 cursor-pointer -translate-y-1/2">
                      {showPassword ? (
                        <HidePasswordIcon />
                      ) : (
                        <ShowPasswordIcon />
                      )}
                    </label>
                  </div>
                  {/* Forgot password link */}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:admin@zoplenti.com"
                    className="text-white cursor-pointer !leading-[170%] text-sm sm:text-base inline-block md:text-lg font-aeoniktrials opacity-80 hover:opacity-100 font-normal duration-200">
                    Forgot password?
                  </Link>
                  <div className="pb-4 sm:pb-6 pt-8 sm:pt-10 lg:pt-12">
                    {/* Sign-in button */}
                    <button
                      type="submit"
                      className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[14px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] w-full justify-center">
                      Sign IN{" "}
                      <span className="group-hover:translate-x-[4px] duration-300">
                        <RightArrowIcon />
                      </span>
                    </button>
                  </div>
                  {/* New user registration link */}
                  <div className="text-white font-aeoniktrials text-center  text-sm font-normal">
                    <span className="opacity-50">New to our platform? </span>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:admin@zoplenti.com"
                      className="opacity-50 hover:opacity-100 relative before:w-full before:absolute before:h-[1px] before:bg-white before:bottom-[-2px] duration-200 before:duration-200 before:hover:w-0">
                      Request access.
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
