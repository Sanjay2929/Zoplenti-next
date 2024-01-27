"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DropDownArrowIcon } from "@/components/common/icons/GetStarted";
import { RightArrowIcon } from "@/components/common/icons/Home";
import contactList from "../../common/json/GetStartedContactForm";
import CustomSuccessPopup from "@/components/common/CustomSuccessPopup";

const ContactForm = () => {
  const [selectedRadio, setSelectedRadio] = useState("brand");
  const [joinFamilyDetails, setJoinFamilyDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsiteName: "",
    typeOfCompan: "",
    aboutUs: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  // POPUP ON SUBMIT FORM
  const [successPopup, setSuccessPopup] = useState(false);
  // const router = useRouter();
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };
  // Format phone number input
  const formatPhoneNumber = (input) => {
    // Remove non-numeric characters
    const cleaned = input.replace(/\D/g, "");
    const truncted = cleaned.slice(0, 10);
    // Apply phone number format
    const match = truncted.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      setJoinFamilyDetails({
        ...joinFamilyDetails,
        phone: `(${match[1]}) ${match[2]}-${match[3]}`,
      });
    } else {
      setJoinFamilyDetails({ ...joinFamilyDetails, phone: truncted });
    }
  };
  // Capitalize the first letter of a string
  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleInputChange = (e) => {
    formatPhoneNumber(e.target.value);
  };
  const submit = useRef();
  // Send email using emailjs
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("RelMWT8AEo2vvSl4e");
    setLoading(true);
    emailjs
      .send("service_ehkdcul", "template_fswb6lf", {
        firstName: joinFamilyDetails.firstName,
        lastName: joinFamilyDetails.lastName,
        email: joinFamilyDetails.email,
        phone: joinFamilyDetails.phone,
        companyName: joinFamilyDetails.companyName,
        companyWebsiteName: joinFamilyDetails.companyWebsiteName,
        typeOfCompany: selectedRadio,
        aboutUs: joinFamilyDetails.aboutUs,
        comment: joinFamilyDetails.comment,
      })
      .then(() => {
        setLoading(false);
        // router.push("/submit-success");
        setSuccessPopup(true);
        setJoinFamilyDetails(false);
      })
      .catch(() => {
        setLoading(false);
      });
    e.target.reset();
  };

  return (
    <>
      <div className="w-full border h-full border-dodgerBlue rounded-xl p-5 sm:p-6 md:p-7 bg-deepCove blur_filter">
        {successPopup ? (
          <>
            <CustomSuccessPopup
              setSuccessPopup={setSuccessPopup}
              discription=" Thank you for your interest in a partnership. We'll be in touch soon."
            />
          </>
        ) : (
          <>
            <h3 className="text-center font-aeoniktrials font-normal text-[32px] text-white leading-normal pb-5 sm:pb-6">
              Let’s Talk
            </h3>
            <form ref={submit} onSubmit={sendEmail}>
              {/* Input fields for first name and last name */}
              <div className="flex gap-4 sm:gap-6 md:gap-[30px] pb-4 sm:pb-6 md:pb-[30px] w-full sm:flex-row flex-col">
                <div className="w-full">
                  {/* First Name */}
                  <label
                    htmlFor="Firstname"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    id="Firstname"
                    className="w-full py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                    placeholder="First name"
                    value={joinFamilyDetails.firstName}
                    onChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        firstName: capitalizeFirstLetter(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="w-full">
                  {/* Last Name */}
                  <label
                    htmlFor="Lastname"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    id="Lastname"
                    className="w-full py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                    placeholder="Last name"
                    value={joinFamilyDetails.lastName}
                    onChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        lastName: capitalizeFirstLetter(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              {/* Input fields for email and phone number */}
              <div className="flex gap-4 sm:gap-6 md:gap-[30px] pb-4 sm:pb-6 md:pb-[30px] w-full sm:flex-row flex-col">
                <div className="w-full">
                  {/* Email */}
                  <label
                    htmlFor="Email"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="Email"
                    className="w-full py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                    placeholder="nextpartner@zoplenti.com"
                    onChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full">
                  {/* Phone Number */}
                  <label
                    htmlFor="phoneNumber"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Phone
                  </label>
                  <input
                    className="w-full py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    maxLength={14}
                    value={joinFamilyDetails.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6 md:gap-[30px] pb-4 sm:pb-6 md:pb-[30px] w-full sm:flex-row flex-col">
                <div className="w-full">
                  {/* Company Name */}
                  <label
                    htmlFor="Companyname"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Company name
                  </label>
                  <input
                    required
                    type="text"
                    id="Companyname"
                    className="w-full py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                    placeholder="Company name"
                    onChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        companyName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full">
                  {/* Company Website */}
                  <label
                    htmlFor="Companywebsite"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Company website
                  </label>
                  <input
                    required
                    type="text"
                    id="Companywebsite"
                    className="w-full py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                    placeholder="Company website"
                    onChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        companyWebsiteName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <h4 className="font-aeoniktrials font-normal sm:text-[18px] text-[16px] text-white pb-2.5">
                What type of company do you represent?
              </h4>
              <div className="flex gap-6 items-center">
                <div className="flex gap-2 items-center">
                  {/* What type of company do you represent*/}
                  <input
                    hidden
                    className="custom-radio "
                    checked={selectedRadio === "brand"}
                    type="radio"
                    name="company"
                    id="brand"
                    value="brand"
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor="brand"
                    className={`w-[18px] h-[18px] rounded-full duration-200 cursor-pointer ${
                      selectedRadio === "brand"
                        ? " bg-dodgerBlue border-[3.5px] border-white"
                        : "border bg-deepCove"
                    }`}></label>
                  <label
                    htmlFor="brand"
                    className="font-aeoniktrials font-base font-normal text-white">
                    Brand
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    hidden
                    type="radio"
                    checked={selectedRadio === "distributor"}
                    name="company"
                    id="distributor"
                    value="distributor"
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor="distributor"
                    className={`w-[18px] h-[18px] rounded-full duration-200 cursor-pointer ${
                      selectedRadio === "distributor"
                        ? " bg-dodgerBlue border-[3.5px] border-white"
                        : "border bg-deepCove"
                    }`}></label>
                  <label
                    htmlFor="distributor"
                    className="font-aeoniktrials font-base font-normal text-white">
                    Distributor
                  </label>
                </div>
              </div>
              {/* Goal */}
              <label
                htmlFor="goal"
                className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block mt-4 sm:mt-6 md:mt-[30px]">
                How did you hear about us?
              </label>
              <div className="relative custom-select">
                <select
                  required
                  className="w-full py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] outline-none h-11"
                  id="selectOption"
                  name="selectOption"
                  onChange={(e) =>
                    setJoinFamilyDetails({
                      ...joinFamilyDetails,
                      aboutUs: e.target.value,
                    })
                  }>
                  <option
                    selected
                    disabled
                    className="cursor-pointer w-full"
                    value="please_select">
                    Please select
                  </option>
                  {contactList.map((obj) => (
                    <option
                      className="cursor-pointer w-full"
                      key={obj.title}
                      value={obj.title}>
                      {obj.title}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="selectOption"
                  className="absolute top-1/2 right-3 -translate-y-1/2">
                  <DropDownArrowIcon />
                </label>
              </div>
              <label
                htmlFor="goal"
                className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block mt-4 sm:mt-6 md:mt-[30px]">
                What is your goal in contacting us?
              </label>
              <textarea
                required
                type="text"
                id="goal"
                className="w-full resize-none lg:h-[89px] !leading-[170%] py-2 px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
                placeholder="Type here..."
                onChange={(e) =>
                  setJoinFamilyDetails({
                    ...joinFamilyDetails,
                    comment: e.target.value,
                  })
                }
              />
              {/* button submit */}
              <button className="w-full uppercase shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] justify-center text-white font-aeoniktrials h-[48px] font-bold !leading-[150%] text-base py-[11px] px-[14px] rounded bg-dodgerBlue flex items-center border border-dodgerBlue hover:border-white hover:bg-transparent transition-all duration-300 gap-2 group mt-8 sm:mt-10 md:mt-12">
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
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ContactForm;
