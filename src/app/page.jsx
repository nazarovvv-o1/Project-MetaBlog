import NavbarBattom from "../Components/NavbarBottom/NavbarBottom";
import Shablon from "../Components/Shablon/Shablon";
import Cards from "../Components/Cards/Cards";
import ViewAll from "@/Components/ViewAll/ViewAll";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-red-500 dark:hidden block " >Hello</h1>
      <h1 className="text-green-500 dark:block hidden " >Hello</h1> */}
      <NavbarBattom />
      <Shablon />
      <Cards />
      <ViewAll />
      <Shablon />
    </div>
  );
}
