import Link from "next/link";
import FooterData from "./FooterData";

export default function FooterLi() {
  return (
    <div className="flex gap-20 w-[495px]">
      {FooterData.map((items) => (
        <ul key={items.id}>
        <li className="text-[#181A2A] dark:text-white font-semibold text-lg">{items.ul}</li>
        <Link href={'/'}>
        <li className="text-[#3B3C4A] dark:text-[#bababf] font-normal text-[16px] mt-6">{items.li}</li>
        <li className="text-[#3B3C4A] dark:text-[#bababf] font-normal text-[16px] mt-2">{items.li2}</li>
        <li className="text-[#3B3C4A] dark:text-[#bababf] font-normal text-[16px] mt-2">{items.li3}</li>
        <li className="text-[#3B3C4A] dark:text-[#bababf] font-normal text-[16px] mt-2">{items.li4}</li>
        <li className="text-[#3B3C4A] dark:text-[#bababf] font-normal text-[16px] mt-2">{items.li5}</li>
        <li className="text-[#3B3C4A] dark:text-[#bababf] font-normal text-[16px] mt-2">{items.li6}</li>
        </Link>
      </ul>
      ))}
      
    </div>
  );
}
