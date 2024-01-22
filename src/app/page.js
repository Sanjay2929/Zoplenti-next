import HomePage from "@/components/home/HomePage";

export const metadata = {
  metadataBase: "https://new-zoplenti-next.vercel.app/",
  title: "Zoplenti | Your Top Amazon Partner",
  description:
    "Zoplenti is the Amazon retailer premium brands partner with to grow their market share and dominate their category on Amazon.com.",
  openGraph: {
    title: "Zoplenti | Your Top Amazon Partner",
    description:
      "Zoplenti is the Amazon retailer premium brands partner with to grow their market share and dominate their category on Amazon.com.",
    images: ["/meta-image.webp"],
  },
};
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
