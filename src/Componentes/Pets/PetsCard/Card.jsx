import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Swal from "sweetalert2";


import { deletePetFn } from "../../../API/ApiPet";
import QRCodeGenerator from "../../QR/QRCodeGenerator";

const Card = (props) => {
  const { pet } = props;
  
  const queryClient = useQueryClient();

  const { mutate: deletePet } = useMutation({
    mutationFn: deletePetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota eliminada con exito");

      queryClient.invalidateQueries("pet");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleDelete = () => {
    Swal.fire({
      title: "¿Are you sure?",
      text: `You're aboute to delete the product "${pet.name}"`,
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deletePet(pet.id);
      }
    });
  };

  return (
    <section className="bg- text-white">
      <div className="  overflow-hidden rounded-lg border border-black p-4 sm:p-6 lg:p-8">
        <span className=" inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              <span className="font-light text-gray-600">Nombre : </span>
              {pet.name}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              <span className="font-light text-gray-600">Raza : </span>
              {pet.raza}
            </p>
            <p className="mt-1 text-xs font-medium text-gray-600">
              <span className="font-light text-gray-600">Tipo : </span>
              {pet.tipo}
            </p>
            <p className="mt-1 text-xs font-medium text-gray-600">
              <span className="font-light text-gray-600">Direccion : </span>
              {pet.direccion}
            </p>
            <p className="mt-1 text-xs font-medium text-gray-600">
              <span className="font-light text-gray-600">
                Numero de contacto :{" "}
              </span>
              {pet.numberphone}
            </p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt=""
              src={pet.image}
              className="size-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-pretty text-sm text-gray-500">
            <span className="font-light text-gray-600">
              Informacion Addicional :{" "}
            </span>
            {pet.content}
          </p>
        </div>

        <button
          className="inline-block rounded bg-red-600 px-4 py-3 mt-5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          onClick={handleDelete}
        >
          Eliminar
        </button>

        <QRCodeGenerator petId={pet.id} />
      </div>
    </section>
  );
};

export default Card;