import Image from "next/image";
import CardData from "./CardData";
import Link from "next/link";

export default function Cards({ showTitle = true }) {
  return (
    <div className="Container pt-20">
      {showTitle && <h1 className="text-2xl font-bold">Latest Post</h1>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        {CardData.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-[#E8E8EA] dark:border-[#232434] rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link href={`/autor-page/${item.id}`}>
              <Image src={item.img} alt="Foto" width={360} height={240} className="rounded-lg" />
            </Link>

            <button className="text-[#4B6BFB] font-medium bg-[rgba(75,107,251,0.05)] px-2.5 py-1 rounded-md mt-6 transition-colors duration-300 hover:bg-[#4B6BFB] hover:text-white">
              Technology
            </button>
            <h1 className="font-semibold text-2xl mt-4 leading-7">
              {item.title}
            </h1>
            <div className="flex items-center gap-5 mt-5">
              <Image src={item.user.img} width={36} height={36} alt="Foto" className="rounded-full" />
              <h1 className="text-[#97989F] font-medium leading-6 tracking-normal">
                {item.user.name}
              </h1>
              <h1 className="text-[#97989F] font-normal leading-6 tracking-normal">
                {item.user.date}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-[#696A75]"></div>
    </div>
  );
}