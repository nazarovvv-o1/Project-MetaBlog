import Image from "next/image";
import Foto from "../../../../public/Img/NavbarBottom/Image.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NavbarBottom() {
  return (
    <div className="Container">
      <h1 className="text-[#181A2A] dark:text-white text-center text-3xl leading-9 font-semibold">
        Page TItle
      </h1>
      <div className="flex items-center justify-center gap-3 mt-2">
        <p className="text-[#3B3C4A] font-normal border-r-1 pr-4 border-[#e7e7e9] text-lg leading-6">Home</p>
        <p className="text-[#696A75] font-normal text-lg leading-6">Link One</p>
      </div>
      <div className="relative">
        <Image
          src={Foto}
          alt="Foto"
          className="h-[450px] object-cover rounded-xl mt-12"
          width={1216}
          height={450}
        />
        <div className="absolute bottom-10 left-10 text-white">
          <span className="text-sm bg-[#4B6BFB] rounded-md px-2.5 py-1 text-white">
            Technology
          </span>
          <h1 className="font-semibold text-4xl leading-10 mt-4 w-[720px]">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex items-center gap-3 mt-6">
            <AccountCircleIcon color="inherit" className="w-9 h-9" />
            <div className="flex gap-5 text-base leading-6">
              <p>Tracey Wilson</p>
              <p>August 20, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
