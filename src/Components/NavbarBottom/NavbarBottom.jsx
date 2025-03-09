export default function NavbarBottom() {
  return (
    <div className="Container items-start pb-36 pt-6">
      <div className="relative">
        <img src="../../Img/NavbarBottom/Image.png" alt="Foto" />
        <div className="bg-background rounded-xl w-[598px] h-[304px] p-10 shadow-2xl absolute -bottom-16 left-16">
          <span className="text-sm bg-[#4B6BFB] rounded-md px-2.5 py-1  text-white">
            Technology
          </span>
          <h1 className="text-4xl font-semibold dark:hidden block pt-4">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <h1 className="text-4xl text-white dark:block hidden font-semibold pt-4">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="pt-6 flex items-center gap-5 text-[#97989F]">
            <img
              src="../../Img/NavbarBottom/Imagee.svg"
              alt="Foto"
              className="w-9 h-9"
            />
            <h1>Jason Francisco</h1>
            <h1>August 20, 2022</h1>
          </div>
        </div>
        </div>
      </div>
  );
}
