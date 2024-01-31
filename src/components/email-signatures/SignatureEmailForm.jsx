"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignatureEmailForm = () => {
  // State to manage loading state of the form
  const [loading, setLoading] = useState(false);

  // State to manage email signature data
  const [emailSignatureData, setEmailSignatureData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
  });

  // Save data to local storage whenever emailSignatureData changes
  useEffect(() => {
    localStorage.setItem(
      "emailSignatureData",
      JSON.stringify(emailSignatureData)
    );
  }, [emailSignatureData]);

  // Next.js router instance
  const router = useRouter();

  // Form submission handler
  const signatureEmailData = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a delay and then navigate to "/email-signature"
    setTimeout(() => {
      router.push("/email-signature");
    }, 1500);
  };

  return (
    <div className="bg-midnight min-h-screen p-5">
      {/* Email Signature Form */}
      <form
        onSubmit={(e) => signatureEmailData(e)}
        className="signature_form max-w-[600px] py-[34px] px-[50px] bg-white">
        {/* First and Last Name Inputs */}
        <div className="flex-col sm:flex-row flex">
          <div className="flex flex-col">
            {/* First Name Input */}
            <label
              htmlFor="first-name"
              className="text-santasGray text-[12px] font-normal font-Inter mb-2">
              First Name
            </label>
            <input
              value={emailSignatureData.firstName}
              onChange={(e) =>
                setEmailSignatureData({
                  ...emailSignatureData,
                  firstName: e.target.value,
                })
              }
              required
              type="text"
              id="first-name"
              className="text-santasGray eamil_form_input text-[12px] font-normal font-Inter p-1 w-[164px] max-h-[25px]
                            rounded-[4px] border-[1px] border-solid border-iron"
            />
          </div>
          <div className="flex flex-col sm:ms-2 mt-4 sm:mt-0">
            {/* Last Name Input */}
            <label
              htmlFor="last-name"
              className="text-santasGray text-[12px] font-normal font-Inter mb-2">
              Last Name
            </label>
            <input
              value={emailSignatureData.lastName}
              onChange={(e) =>
                setEmailSignatureData({
                  ...emailSignatureData,
                  lastName: e.target.value,
                })
              }
              required
              type="text"
              id="last-name"
              className="text-santasGray eamil_form_input text-[12px] font-normal font-Inter p-1 w-[164px] max-h-[25px]
                            rounded-[4px] border-[1px] border-solid border-iron"
            />
          </div>
        </div>
        {/* Title and Email Inputs */}
        <div className="flex-col sm:flex-row flex mt-4">
          <div className="flex flex-col">
            {/* Title Input */}
            <label
              htmlFor="title"
              className="text-santasGray text-[12px] font-normal font-Inter mb-2">
              Title at Zoplenti
            </label>
            <input
              value={emailSignatureData.title}
              onChange={(e) =>
                setEmailSignatureData({
                  ...emailSignatureData,
                  title: e.target.value,
                })
              }
              required
              type="text"
              id="title"
              className="text-santasGray eamil_form_input text-[12px] font-normal font-Inter p-1 w-[164px] max-h-[25px]
                            rounded-[4px] border-[1px] border-solid border-iron"
            />
          </div>
          <div className="flex flex-col sm:ms-2 mt-4 sm:mt-0">
            {/* Email Input */}
            <label
              htmlFor="email"
              className="text-santasGray text-[12px] font-normal font-Inter mb-2">
              Your Email
            </label>
            <input
              value={emailSignatureData.email}
              onChange={(e) =>
                setEmailSignatureData({
                  ...emailSignatureData,
                  email: e.target.value,
                })
              }
              required
              type="email"
              id="email"
              className="text-santasGray eamil_form_input text-[12px] font-normal font-Inter p-1 w-[164px] max-h-[25px]
                            rounded-[4px] border-[1px] border-solid border-iron"
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          className="hover:!bg-transparent hover:!text-azureRadiance duration-200 mt-8 border-solid border-[1px] border-azureRadiance
                    rounded-[42px] px-5 py-[10px] text-[12px] bg-azureRadiance text-white">
          {loading ? "Loading.." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SignatureEmailForm;
