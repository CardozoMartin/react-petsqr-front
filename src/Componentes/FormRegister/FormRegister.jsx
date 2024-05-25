import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { useMutation } from "@tanstack/react-query";
import { postUserFn } from "../../API/ApiUsers";
import { useState } from "react";
import { useSession } from "../../Store/UseSession";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

const FormRegister = () => {
  // ZUSTAND --------------------------------------------

  const { login } = useSession();

  // RRD ------------------------------------------------

  const navigate = useNavigate();

  const { register, handleSubmit: onSubmitRHF } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutate: postUser } = useMutation({
    mutationFn: postUserFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Bienvenido");

      // Loguear al usuario
      login({ ...data, password: undefined });

      // Navegar a inicio (pero ya estando logueados)
      navigate("/");
    },
    onError: (error) => {
      Swal.close();
      toast.error("Ocurrió un error al registrar el usuario");
    },
  });

  const handleSubmit = (data) => {
    setIsSubmitting(true);
    postUser({ ...data, isActive: true });
  };

  return (
  
 <>
      <form
        action="#"
        className="mt-8 grid grid-cols-6 gap-6"
        onSubmit={onSubmitRHF(handleSubmit)}
      >
        <Input
          register={register}
          placeholder="Nombre"
          type="text"
          id="firstname"
          className="col-span-6 sm:col-span-3"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="firstname"
        />

        <Input
          register={register}
          placeholder="Apellido"
          id="lastname"
          type="text"
          className="col-span-6 sm:col-span-3"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="lastname"
        />

        <Input
          register={register}
          placeholder="Nombre de usuario"
          type="text"
          id="username"
          className="col-span-6"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="Nombre de usuario"
        />
        
        

        <Input
          register={register}
          placeholder="Contraseña"
          type="password"
          id="password"
          className="col-span-6 sm:col-span-3"
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="password"
        />

        <fieldset className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
            />

            <span className="text-sm text-gray-700">
              Deseo Recibir informacion sobre actualizacion en mi email
            </span>
          </label>
        </fieldset>

        <fieldset className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-900 hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            type="submit"
             
          >
             Crear cuenta
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Ya tienes cuenta?{" "}
            <Link to="/login" className="text-gray-700 underline font-bold ">
              {"  "}
              Iniciar
            </Link>
            .
          </p>
        </fieldset>
      </form>
    </>

      
   
  );
};

export default FormRegister;
