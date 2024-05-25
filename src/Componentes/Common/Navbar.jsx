import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

import { useSession } from "../../Store/UseSession";

import "./navbar.css";

const Navbar = () => {
  const { isLoggedIn, logout, user } = useSession();

  const handleLogout = () => {
    Swal.fire({
      title: "Atencion",
      text: "Estas por salir !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, salir",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Session cerrada con exito");
        logout();

        Navigate("/");
      }
    });
  };
  return (
    <div className="navContainer">
      <div className="wrapper">
        <span className="left">
          <h1 className="logo">PetsQr</h1>
          {!isLoggedIn && (
            <ul className="menu">
              <li className="menuItem">Home</li>
              <li className="menuItem">Registro</li>
              <li className="menuItem">Ayuda</li>
            </ul>
          )}
        </span>
        {!isLoggedIn && <button className="navButton">Ingresar</button>}
        {isLoggedIn && (
          <button onClick={handleLogout} className="navButton">
            Salir
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
