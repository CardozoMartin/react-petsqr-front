import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { postPetFn, putPetFn } from "../../../API/ApiPet";
import { useForm } from "react-hook-form";
import { useSession } from "../../../Store/UseSession";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { usePet } from "../../../Store/UsePet";

const FormPets = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { user } = useSession();
  const { pet, clearPet } = usePet();
  const [image, setImage] = useState(null);

  const isEditing = !!pet;

  if (isEditing) {
    setValue("name", pet.name);
    setValue("tipo", pet.tipo);
    setValue("raza", pet.raza);
  }

  const queryClient = useQueryClient();

  const { mutate: postPet } = useMutation({
    mutationFn: postPetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota agregada con éxito");
      reset();
      queryClient.invalidateQueries("pet");
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrió un error al crear la mascota");
    },
  });

  const { mutate: putPet } = useMutation({
    mutationFn: putPetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota editada con éxito");
      reset();
      queryClient.invalidateQueries("pet");
      clearPet();
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrió un error al editar la mascota");
    },
  });

  const onSubmit = (data) => {
    Swal.showLoading();
    const petData = { ...data, userID: user.id, image };

    if (isEditing) {
      putPet({ ...petData, id: pet.id });
    } else {
      postPet(petData);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Agregar una mascota
        </h1>

        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-center text-lg font-medium">Informacion de la mascota</p>

          <div>
            <label htmlFor="name" className="sr-only">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese el nombre"
            />
          </div>

          <div>
            <select
              name="tipo"
              id="tipo"
              {...register("tipo")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            >
              <option>Seleccione el tipo de mascota</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo">Conejo</option>
              <option value="Caballo">Caballo</option>
              <option value="Hamster">Hamster</option>
            </select>
          </div>

          <div>
            <label htmlFor="raza" className="sr-only">
              Raza
            </label>
            <input
              type="text"
              id="raza"
              {...register("raza")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese la raza de su mascota"
            />
          </div>
          <div>
            <label htmlFor="content" className="sr-only">
              Comentario
            </label>
            <input
              type="text"
              id="content"
              {...register("content")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Agregue alguna informacion especial"
            />
          </div>
          <div>
            <label htmlFor="image" className="sr-only">
              Imagen
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <p className="text-center text-lg font-medium">Informacion de contacto</p>
          <div>
            <label htmlFor="direccion" className="sr-only">
              direccion
            </label>
            <input
              type="text"
              id="direccion"
              {...register("direccion")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese la direccion de su mascota"
            />
          </div>
          <div>
            <label htmlFor="numberphone" className="sr-only">
              Numero de Contacto
            </label>
            <input
              type="text"
              id="numberphone"
              {...register("numberphone")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese su telefono de contacto"
            />
          </div>
          <div>
            <label htmlFor="numberphone" className="sr-only">
              Red Social Facebook
            </label>
            <input
              type="text"
              id="facebook"
              {...register("facebook")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese su facebook"
            />
          </div>
          <div>
            <label htmlFor="numberphone" className="sr-only">
              Red Social Facebook
            </label>
            <input
              type="text"
              id="instagram"
              {...register("instagram")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese su instagram"
            />
          </div>
         

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            {isEditing ? "Editar" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPets;
