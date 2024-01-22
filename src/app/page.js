// Importing the Home component from the specified path
import HomePage from "@/components/home/Home";

// Metadata object containing information about the website
export const metadata = {
  // Base URL for metadata links
  metadataBase: "https://new-zoplenti-next.vercel.app/",
  // Title of the website
  title: "Zoplenti | Your Top Amazon Partner",
  // Description of the website
  description:
    "Zoplenti is the Amazon retailer premium brands partner with to grow their market share and dominate their category on Amazon.com.",
  // OpenGraph metadata for social media sharing
  openGraph: {
    // Title for OpenGraph metadata
    title: "Zoplenti | Your Top Amazon Partner",
    // Description for OpenGraph metadata
    description:
      "Zoplenti is the Amazon retailer premium brands partner with to grow their market share and dominate their category on Amazon.com.",
    // Array of images for OpenGraph metadata
    images: ["/meta-image.webp"],
  },
};

// Default export for the Home component
export default function Home() {
  // Returning the Home component
  return (
    <>
      <HomePage />
    </>
  );
}
