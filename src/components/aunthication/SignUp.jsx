"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import CustomSuccessPopup from "../common/CustomSuccessPopup";
import { RightArrowIcon } from "../common/icons/Home";

const SignUp = () => {
  const [fileFileName, setFileFileName] = useState(""); // Changed state variable name

  const [joinTeamDetails, setJoinTeamDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    uploadFile: "",
    interstead: "",
  });
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleFileChange = (event, fileType) => {
    const files = event.target.files;

    if (files.length > 0) {
      const fileUrl = URL.createObjectURL(files[0]);
      const fileName = files[0].name;

      if (fileType === "file") {
        setJoinTeamDetails({
          ...joinTeamDetails,
          file: fileUrl,
          fileFile: files[0],
        });
        setFileFileName(fileName);
      }
    } else {
      setErrorMessage(false);
    }
  };
  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.init("RD5_7T5hu6SDQxhiW");
  //   setJoinTeamDetails(false);
  //   if (fileFileName.length === 0) {
  //     setErrorMessage(true);
  //     return; // Don't proceed with form submission if there's an error
  //   }
  //   setLoading(true);

  //   emailjs
  //     .send("service_vnvpiol", "template_7r2ib31", {
  //       firstName: joinTeamDetails.firstName,
  //       lastName: joinTeamDetails.lastName,
  //       email: joinTeamDetails.email,
  //       file: joinTeamDetails.file,
  //       comment: joinTeamDetails.interstead,
  //     })
  //     .then(() => {
  //       setLoading(false);
  //       setSuccessPopup(true);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });

  //   e.target.reset();
  //   setFileFileName("");
  //   setErrorMessage(false);
  // };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("RelMWT8AEo2vvSl4e");

    // Check if file is not selected
    if (!joinTeamDetails.fileFile) {
      setErrorMessage(true);
      return; // Don't proceed with form submission if there's an error
    } else {
      setErrorMessage(false);
    }

    setLoading(true);

    emailjs
      .send("service_ehkdcul", "template_3o3dpdc", {
        firstName: joinTeamDetails.firstName,
        lastName: joinTeamDetails.lastName,
        email: joinTeamDetails.email,
        file: joinTeamDetails.file,
        comment: joinTeamDetails.interstead,
      })
      .then(() => {
        setLoading(false);
        setSuccessPopup(true);
        setJoinTeamDetails(false);
      })
      .catch(() => {
        setLoading(false);
      });

    // Do not reset the form, just clear file-related state
    setFileFileName("");
    setErrorMessage(false);
  };

  return (
    <>
      <div className="max-w-[564px] md:max-w-[500px] h-full lg:max-w-[564px] mx-auto md:ms-auto md:me-0 bg-deepCove blur_filter p-5 sm:p-6 md:p-4 lg:p-8 w-full border border-dodgerBlue rounded-xl">
        {successPopup ? (
          <>
            <CustomSuccessPopup
              setSuccessPopup={setSuccessPopup}
              discription="Thank you for your interest in joining our team. We'll be in touch if there are any job openings."
            />
          </>
        ) : (
          <>
            <h3 className="text-center font-aeoniktrials font-normal text-[32px] text-white leading-normal pb-5 sm:pb-6">
              Let&apos;s Connect
            </h3>
            <form onSubmit={(e) => sendEmail(e)}>
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-[30px]">
                <div className="flex flex-col min-[500px]:flex-row md:flex-col lg:flex-row gap-4 sm:gap-6 md:gap-[30px]">
                  {/* FIRST NAME  */}
                  <div>
                    <label
                      htmlFor="first_name"
                      className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                      First name
                    </label>
                    <input
                      required
                      type="text"
                      id="first_name"
                      className="w-full !leading-[170%] py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                      placeholder="First name"
                      value={joinTeamDetails.firstName}
                      onChange={(e) =>
                        setJoinTeamDetails({
                          ...joinTeamDetails,
                          firstName: capitalizeFirstLetter(e.target.value),
                        })
                      }
                    />
                  </div>
                  {/* LAST NAME  */}
                  <div>
                    <label
                      htmlFor="Last_name"
                      className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                      Last name
                    </label>
                    <input
                      required
                      type="text"
                      id="Last_name"
                      className="w-full !leading-[170%] py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                      placeholder="Last name"
                      value={joinTeamDetails.lastName}
                      onChange={(e) =>
                        setJoinTeamDetails({
                          ...joinTeamDetails,
                          lastName: capitalizeFirstLetter(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                {/* EMAIL  */}
                <div>
                  <label
                    htmlFor="email_user"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email_user"
                    className="w-full !leading-[170%] py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                    placeholder="nextemployee@zoplenti.com"
                    onChange={(e) =>
                      setJoinTeamDetails({
                        ...joinTeamDetails,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                {/* UPLOAD FILE  */}
                <div className="flex flex-col">
                  <label
                    htmlFor="upload-file"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Upload file
                  </label>
                  <div className="flex w-full justify-between items-center bg-alto rounded-md ps-[14px] py-1 pe-1">
                    <p className="font-aeoniktrials font-normal text-black text-opacity-[49%] text-nowrap w-[calc(100%-125px)]">
                      {fileFileName !== ""
                        ? fileFileName
                        : "Upload cover letter & resume"}
                    </p>
                    <label
                      htmlFor="upload-file"
                      className="font-aeoniktrials text-nowrap text-base text-white bg-dodgerBlue rounded !leading-[170%] font-normal py-[4px] px-[18px] cursor-pointer">
                      Choose File
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => handleFileChange(e, "file")}
                      type="file"
                      accept=".pdf, .doc, .docx"
                      hidden
                      id="upload-file"
                      name="upload"
                    />
                  </div>
                  {errorMessage && (
                    <p className="text-red-700">please upload file</p>
                  )}
                </div>
                {/* WHY INTRESTED IN ZOPLENTI  */}
                <div>
                  <label
                    htmlFor="user_comment"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Why are you interested in working at Zoplenti?
                  </label>
                  <textarea
                    required
                    type="text"
                    id="user_comment"
                    className="w-full lg:h-[89px] resize-none !leading-[170%] py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                    placeholder="Type here..."
                    onChange={(e) =>
                      setJoinTeamDetails({
                        ...joinTeamDetails,
                        interstead: e.target.value,
                      })
                    }
                  />
                </div>
                {/* SUBMIT BUTTON  */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] h-12 text-white font-aeoniktrials font-bold text-base py-[11px] px-[13.6px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] w-full justify-center">
                    {loading ? (
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-white inline-block animate_wave"></span>
                        <span className="w-2 h-2 rounded-full bg-white inline-block animate_wave2"></span>
                        <span className="w-2 h-2 rounded-full bg-white inline-block animate_wave3"></span>
                      </div>
                    ) : (
                      <>
                        SUBMIT
                        <span className="group-hover:translate-x-[4px] duration-300">
                          <RightArrowIcon />
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default SignUp;
