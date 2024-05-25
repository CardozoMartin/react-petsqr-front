import { useSession } from "../../../Store/UseSession";


import Card from "./Card";

const PetCard = (props) => {
  const { pet } = props;
  const { user, loading, isLoggedIn } = useSession();


  // Verifica si el usuario está cargando o no está autenticado

  const userId = user.id;

  const filterPetId = pet && pet.data ? pet.data.filter((item) => item.userID === userId) : [];


  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filterPetId.map((item) => (
            <div key={item.id} className="">
              <Card pet={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetCard;
