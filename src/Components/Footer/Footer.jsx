import FooterLi from "./FooterLi";
import EmailIcon from "@mui/icons-material/Email";
import FooterBottom from "../FooterBottom/FooterBottom";

export default function Footer() {
  return (
    <div className="bg-[#E8E8EA] dark:bg-[#141624] mt-[100px]">
      <div className="Container py-16 flex gap-5">
        <div className="w-[300px]">
          <h1 className="font-semibold leading-7 text-lg">About</h1>
          <p className="text-[#696A75] dark:text-[#bababf] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <h1 className="text-[#181A2A] dark:text-white font-semibold text-lg leading-6 mt-6">
            Email :
            <span className="text-[#3B3C4A] dark:text-[#bababf] font-normal">
              info@jstemplate.net
            </span>
          </h1>
          <h1 className="text-[#181A2A] dark:text-white font-semibold text-lg leading-6 mt-1">
            Phone :
            <span className="text-[#3B3C4A] dark:text-[#bababf] font-normal"> 880 123 456 789</span>
          </h1>
        </div>
        <div className="pl-20">
          <FooterLi />
        </div>
        <div className="bg-white dark:bg-[#232434] w-[392px] h-[254px] rounded-xl p-8 text-center">
          <h1 className="text-[20px] leading-6 font-semibold dark:text-white text-[#181A2A]">
            Weekly Newsletter
          </h1>
          <p className="text-[#696A75] dark:text-[#9899a0] font-normal leading-6 text-[16px] mt-1.5">
            Get blog articles and offers via email
          </p>
          <div className="relative w-[320px]">
            <EmailIcon className="absolute right-3 top-12 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="Your Email"
              className="mt-6 border dark:bg-[#181a2a] border-[#DCDDDF] dark:border-[#3b3c4a] w-full h-12 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-[320px] cursor-pointer h-[48px] mt-2 rounded-md px-3 py-5 bg-[#4B6BFB] text-white pt-3 transition-all duration-300 hover:bg-[#3A54D6] dark:hover:bg-[#6B8BFF] hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}
