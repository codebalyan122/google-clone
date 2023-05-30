import Image from "next/image";
import HomeHeader from "../components/HomeHeader";
import HomeSearch from "../components/Search";

export default function page() {
  return (
    <>
      <HomeHeader />
      {/* Body */}
      <div className="flex items-center  mt-24 flex-col">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          }
          height="100"
          width="300"
          alt="Google image"
          priority
        />
        <HomeSearch />
      </div>
    </>
  );
}
