import ViewAll from "@/Components/ViewAll/ViewAll";
import NavbarBottom from "../../Components/Blog-Page/NavbarBottom/NavbarBottom";
import Cards from "../../Components/Cards/Cards";
import Shablon from "@/Components/Shablon/Shablon";

export default function page() {
  return (
    <div>
      <NavbarBottom />
      <Cards />
      <ViewAll />
      <Shablon />
    </div>
  );
}
