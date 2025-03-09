import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavbarBtmData from "./NavbarBtmData";
import Image1 from "../../../../public/Img/Single-Page-NavbarBottom/Image.png";
import Image2 from '../../../../public/Img/Single-Page-NavbarBottom/Image2.png';
import Shablon from "../../Shablon/Shablon";

import Image from "next/image";

export default function NavbarBottom() {
  return (
    <div className="max-w-[800px] m-auto pt-8">
      <div >
        <span className="text-sm bg-[#4B6BFB] rounded-md px-2.5 py-1 text-white">
          Technology
        </span>
        <h1 className="font-semibold text-4xl leading-10 mt-4 w-[800px]">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex items-center gap-3 mt-6 text-[#696A75]">
          <AccountCircleIcon color="inherit" className="w-9 h-9" />
          <div className="flex gap-5 text-base leading-6">
            <p>Tracey Wilson</p>
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
      {NavbarBtmData.map((item) => (
        <div key={item.id}>
          <Image src={Image1} alt="Foto" className="mt-8" />
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-8">{item.p}</p>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-8">{item.p1}</p>
          <h1 className="font-semibold text-2xl leading-7 text-[#181A2A] dark:text-white mt-8">Research Your Destination</h1>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-4">{item.p2}</p>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-8">{item.p3}</p>
          <h1 className="font-semibold text-2xl leading-7 text-[#181A2A] dark:text-white mt-8">Plan Your Itinerary</h1>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-4">{item.p4}</p>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-8">{item.p5}</p>
          <p className="font-normal leading-8 text-2xl rounded-[12px] italic mt-8 p-8 border-l-[4px] dark:border-l-4 dark:border-[#e7e7e9] border-[#E8E8EA] dark:text-white dark:bg-[#232434]  bg-[#F6F6F7]">{item.txt}</p>
          <Image src={Image2} alt="Foto" className="mt-8 mb-8" />
          <Shablon />
          <h1 className="font-semibold text-2xl leading-7 text-[#181A2A] dark:text-white mt-8">Pack Lightly and Smartly</h1>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-4">{item.p6}</p>
          <h1 className="font-semibold text-2xl leading-7 text-[#181A2A] dark:text-white mt-8">Stay Safe and Healthy</h1>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-4">{item.p7}</p>
          <h1 className="font-semibold text-2xl leading-7 text-[#181A2A] dark:text-white mt-8">Immerse Yourself in the Local Culture</h1>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-4">{item.p8}</p>
          <h1 className="font-semibold text-2xl leading-7 text-[#181A2A] dark:text-white mt-8">Capture Memories</h1>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-4">{item.p9}</p>
          <h1 className="font-semibold text-2xl leading-7 text-[#181A2A] dark:text-white mt-8">Conclusion</h1>
          <p className="font-normal text-xl leading-8 text-[#3B3C4A] dark:text-[#bababf] mt-4">{item.p10}</p>
        </div>
      ))}
    </div>
  );
}
