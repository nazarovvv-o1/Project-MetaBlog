import Cards from "../../../Components/Cards/Cards";
import NavbarBottom from "../../../Components/autor-page/NavbarBottom";
import Shablon from "../../../Components/Shablon/Shablon";

export default async function page({ params }) {
  const { id } = await params;
  return (
    <div>
      <NavbarBottom id={id} />
      <Cards showTitle={false} />
    </div>
  );
}
