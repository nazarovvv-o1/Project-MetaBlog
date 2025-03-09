import Image from "next/image";
import Logo from "../../../public/Icon/FooterBottom/Logo.svg";
import Logo2 from '../../../public/Icon/FooterBottom/Logo2.svg'

export default function FooterBottom() {
  return (
    <div className="Container flex justify-between items-center border-t-1 dark:border-[#232434] border-[#DCDDDF] h-[118px]">
      <div className="flex items-center gap-2.5">
        <Image src={Logo} alt="Logo" className="w-7 h-7 dark:hidden block" />
        <Image src={Logo2} alt="Logo" className="w-7 h-7 dark:block hidden" />
        <div>
          <h1 className="font-normal text-xl leading-7">
            Meta<span className="font-extrabold">Blog</span>
          </h1>
          <p className="font-normal text-lg dark:text-[#bababf] text-[#3B3C4A]">
           <span className="dark:text-white"> © JS Template</span> 2023. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="flex items-center leading-6 font-normal gap-4 text-lg text-[#3B3C4A]">
        <h1 className="border-r-1 border-[#DCDDDF] dark:border-[#232434] dark:text-[#bababf] pr-4">Terms of Use</h1>
        <h1 className="border-r-1 border-[#DCDDDF] dark:border-[#232434] dark:text-[#bababf] pr-4">Privacy Policy</h1>
        <h1 className="dark:text-[#bababf]">Cookie Policy</h1>
      </div>
    </div>
  );
}
