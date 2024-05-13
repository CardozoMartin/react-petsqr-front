import Introi from "../Componentes/Common/Introi";
import Navbar from "../Componentes/Common/Navbar";
import Contacto from "../Componentes/Contacto/Contacto";
import Features from "../Componentes/Features/Features";
import FormLogin from "../Componentes/FormLogin/FormLogin";
import Services from "../Componentes/Services/Services";

import "./home.css";

const Home = () => {
  return (
    <>
    
    <div className="container">
      <Navbar />
      <Introi></Introi>
    </div>
    <div>
      <FormLogin/>
    </div>
    <div className="containerTwho">
        
        <Features/>
    </div>
    <div className="bg-violet-700 text-white contacContainer">
      <Contacto></Contacto>
    </div>
       
    </>
  );
};

export default Home;
