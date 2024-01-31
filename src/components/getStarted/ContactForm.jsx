"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DropDownArrowIcon } from "@/components/common/icons/GetStarted";
import contactList from "../common/json/GetStartedContactForm";
import CustomSuccessPopup from "@/components/common/CustomSuccessPopup";
import CustomInput from "../common/fields/CustomInput";
import CustomButton from "../common/CustomButton";

const ContactForm = () => {
  const [selectedRadio, setSelectedRadio] = useState("brand");
  const staticData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsiteName: "",
    typeOfCompan: "",
    aboutUs: "",
    comment: "",
  };
  const [joinFamilyDetails, setJoinFamilyDetails] = useState(staticData);
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
    const truncated = cleaned.slice(0, 10);
    // Apply phone number format
    const match = truncated.match(/^(\d{3})(\d{3})(\d{4})$/);
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

                  <CustomInput
                    type="text"
                    placeholder="First name"
                    onInputChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        firstName: capitalizeFirstLetter(e.target.value),
                      })
                    }
                    value={joinFamilyDetails.firstName}
                    id="Firstname"
                  />
                </div>
                <div className="w-full">
                  {/* Last Name */}
                  <label
                    htmlFor="Lastname"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Last name
                  </label>

                  <CustomInput
                    type="text"
                    placeholder="Lastname"
                    onInputChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        lastName: capitalizeFirstLetter(e.target.value),
                      })
                    }
                    value={joinFamilyDetails.lastName}
                    id="Lastname"
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

                  <CustomInput
                    type="email"
                    placeholder="Lastname"
                    onInputChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        email: e.target.value,
                      })
                    }
                    value={joinFamilyDetails.email}
                    id="Email"
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

                  <CustomInput
                    type="text"
                    placeholder="Company name"
                    onInputChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        companyName: e.target.value,
                      })
                    }
                    value={joinFamilyDetails.companyName}
                    id="Companyname"
                  />
                </div>
                <div className="w-full">
                  {/* Company Website */}
                  <label
                    htmlFor="Companywebsite"
                    className="font-aeoniktrials font-normal text-base text-white pb-2 inline-block">
                    Company website
                  </label>
                  <CustomInput
                    type="text"
                    placeholder="Company website"
                    onInputChange={(e) =>
                      setJoinFamilyDetails({
                        ...joinFamilyDetails,
                        companyWebsiteName: e.target.value,
                      })
                    }
                    value={joinFamilyDetails.companyWebsiteName}
                    id="Companywebsite"
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
                    className={`w-[18px] h-[18px] rounded-full duration-200 cursor-pointer ${selectedRadio === "brand"
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
                    className={`w-[18px] h-[18px] rounded-full duration-200 cursor-pointer ${selectedRadio === "distributor"
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
              <div className="mt-8 sm:mt-10 md:mt-12">

                <CustomButton loading={loading} title="SUBMIT" url="null" />
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ContactForm;
