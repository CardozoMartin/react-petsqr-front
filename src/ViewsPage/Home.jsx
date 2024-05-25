import Introi from "../Componentes/Common/Introi";
import Navbar from "../Componentes/Common/Navbar";
import Contacto from "../Componentes/Contacto/Contacto";
import Features from "../Componentes/Features/Features";
import FormLogin from "../Componentes/FormLogin/FormLogin";
import PetGallery from "../Componentes/Pets/PetsCard/PetGallery";
import FormPets from "../Componentes/Pets/PetsForm/FormPets";
import Services from "../Componentes/Services/Services";
import { useSession } from "../Store/UseSession";

import "./home.css";

const Home = () => {
  const { isLoggedIn } = useSession();

  return (
    <>
      {!isLoggedIn && (
        <div className="container">
          <Navbar />
          <Introi></Introi>
        </div>
      )}
      {!isLoggedIn && (
        <div>
          <FormLogin />
        </div>
      )}
      {isLoggedIn && (
        <div>
          <Navbar></Navbar>
          <FormPets />
          <PetGallery />
        </div>
      )}
      <div className="containerTwho">
        <Features />
      </div>
      <div className="bg-violet-700 text-white contacContainer">
        <Contacto></Contacto>
      </div>
    </>
  );
};

export default Home;
