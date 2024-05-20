import { NavLink } from "react-router-dom";
import Animation from "../Animation/Animation";
import "./intro.css";

const Introi = () => {
  return (
    <div className="containerIntro">
      <div className="leftInt">
        <h1 className="text-center">
          Una nueva forma de tener seguridad con tu mejor amigo de 4 patas
        </h1>
        <p className="text-center">
          Tené toda su información en un solo lugar. Su seguridad y felicidad es
          lo más importante.
        </p>
        <div className="leftDesc">
          <NavLink to="/register" className="register-button">
            REGISTRARSE
          </NavLink>
        </div>
      </div>
      <div className="rightInt">
        <img
          src="https://findpetapp.com/site/wp-content/uploads/2022/03/animacio%CC%81n3.gif"
          alt=""
          className="image"
        />
      </div>
      <Animation />
    </div>
  );
};

export default Introi;
