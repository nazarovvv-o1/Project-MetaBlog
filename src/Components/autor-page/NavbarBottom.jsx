import Image from "next/image";
import CardData from "../Cards/CardData";
import Icon from "../../../public/Icon/autor-page-NavbarBtmIcon/Icon.svg";
import Icon1 from "../../../public/Icon/autor-page-NavbarBtmIcon/Icon1.svg";
import Icon2 from "../../../public/Icon/autor-page-NavbarBtmIcon/Icon2.svg";
import Icon3 from "../../../public/Icon/autor-page-NavbarBtmIcon/Icon3.svg";

export default function NavbarBottom({ id }) {
  const selectedCard = CardData.find((card) => card.id === Number(id));

  if (!selectedCard) {
    return <div className="text-center p-10">Ma'lumot topilmadi</div>;
  }

  return (
    <div className="Container text-center">
      <div className="bg-[#F6F6F7] dark:bg-[#232434] h-[344px] p-12 rounded-xl flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 mt-4">
          <Image
            src={selectedCard.user.img}
            alt="User Foto"
            className=" rounded-full"
            width={64}
            height={64}
          />
          <div className="text-center">
            <h2 className="text-lg dark:text-white font-semibold">{selectedCard.user.name}</h2>
            <p className="text-gray-500 text-start dark:text-[#bababf]">{selectedCard.user.about.job}</p>
          </div>
        </div>
        <div className="mt-6 text-center text-[#3B3C4A] max-w-[706px]">
          {Object.values(selectedCard.description).map((section, index) =>
            typeof section === "object" ? (
              <div key={index} className="text-center">
                <p className="dark:text-[#bababf]">{section.text}</p>
              </div>
            ) : null
          )}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Image src={Icon} alt="Icon" width={32} height={32} />
          <Image src={Icon1} alt="Icon" width={32} height={32} />
          <Image src={Icon2} alt="Icon" width={32} height={32} />
          <Image src={Icon3} alt="Icon" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}
