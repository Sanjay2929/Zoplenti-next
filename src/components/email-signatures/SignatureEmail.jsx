"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Importing necessary modules and components

const SignatureEmail = () => {
  // Create a reference for the content element
  const contentRef = useRef(null);

  // Initialize state for email signature data
  const [emailSignatureData, setEmailSignatureData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
  });

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("emailSignatureData");
    if (storedData) {
      setEmailSignatureData(JSON.parse(storedData));
    }
  }, []);

  // Initialize state for copy status
  const [copy, setCopy] = useState(false);

  // Handle click event for copying content to clipboard
  const handleCopyClick = () => {
    const contentElement = contentRef.current;
    if (contentElement) {
      // Create a range to select the content
      const range = document.createRange();
      range.selectNode(contentElement);

      // Create a new selection and add the range to it
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        // Execute the copy command
        document.execCommand("copy");
        // Set copy status to true and reset after a delay
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 1500);
      } catch (error) {
        console.error("Unable to copy content:", error);
      }

      // Clear the selection
      selection.removeAllRanges();
    }
  };

  // JSX structure for rendering the email signature
  return (
    <div className="bg-midnight min-h-screen p-5">
      <div className="max-w-[600px] bg-white relative p-[18px]">
        <div className="flex items-start" ref={contentRef}>
          <div className="custom_mobile_padding w-full border-collapse">
            {/* Displaying Full Name and Title */}
            <p className="text-firefly font-aeoniktrials text-[13px] font-semibold leading-[10px] m-0">
              {emailSignatureData.firstName} {emailSignatureData.lastName}
              <span className="border-l-[1px] border-solid border-santasGray rounded-[20px] w-0 h-3 ml-1"></span>
              <span className="text-rollingStone font-normal opacity-80 decoration-0 ps-1">
                {emailSignatureData.title}
              </span>
            </p>
            {/* Displaying Email Address */}
            <Link
              className="font-aeoniktrials no-underline list-none text-[13px] text-santasGray leading-[15px] inline-block font-normal"
              style={{
                color: "#9999A6",
              }}
              href={`mailto:${emailSignatureData.email}`}>
              {emailSignatureData.email}
            </Link>
            {/* Displaying Website Link */}
            <p className="leading-[8px] mb-0">
              <Link
                style={{
                  color: "#9999A6",
                }}
                className="font-aeoniktrials list-none no-underline text-[13px] text-santasGray leading-[15px] inline-block font-normal"
                target="_blank"
                href="https://zoplenti.com">
                zoplenti.com
              </Link>
            </p>
            {/* Displaying Zoplenti Logo */}
            <div style={{ paddingTop: "18px" }}>
              <Link target="_blank" href="https://zoplenti.com">
                <Image
                  width={73}
                  height={75}
                  src="/assets/images/steven-email/png/email-sign-logo.png"
                  alt="zoplenti-image"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Copy button and status */}
        <div
          className="p-[30px] font-aeoniktrials text-santasGray absolute flex items-center cursor-pointer end-0 bottom-0"
          onClick={handleCopyClick}>
          <button className="border-0 bg-transparent d-block mx-auto">
            {copy ? (
              <Image
                src="/assets/images/steven-email/svg/email_sign_check_black.svg"
                alt="shadow"
                height={20}
                width={20}
              />
            ) : (
              <Image
                src="/assets/images/steven-email/svg/email_sign_copy_black.svg"
                alt="shadow"
                height={20}
                width={20}
              />
            )}
          </button>
          {/* Copy status text */}
          <div className="text-[10px] text-santasGray font-aeoniktrials font-normal ml-[3px] pt-1">
            {copy ? "Copied" : "Copy"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureEmail;
