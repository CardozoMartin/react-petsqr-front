import React from 'react'
import { useSession } from '../../Store/UseSession';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { postLoginFn } from '../../API/ApiAuth';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import Input from '../Input/Input';

const Form = () => {
    const { login } = useSession();
    const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { mutate: postLogin, isLoading } = useMutation({
    mutationFn: postLoginFn,
    onSuccess:(data)=>{
      Swal.close();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Bievenido",
      });
        login(data)

        navigate("/")

      
    },
    onError:(e)=>{
      Swal.close();
      toast.error(e.message);
    }
  })
  const onSubmit = (data) => {
    if (!isLoading) {
      Swal.showLoading();
      postLogin(data);
    }
  };
  return (
    <form
    action="#"
    className="mx-auto mb-0 mt-8 max-w-md space-y-4 relative bg-violet-700"
    onSubmit={handleSubmit(onSubmit)}
  >
    <Input
      register={register}
      placeholder="username"
      type="text"
      id="username"
      className="col-span-6 sm:col-span-3 bg-white"
      options={{
        required: true,
        minLength: 4,
        maxLength: 6000,
      }}
      name="username"
    />

    <Input
      register={register}
      placeholder="Contraseña"
      type="password"
      id="password"
      className="col-span-6 sm:col-span-3 border-white bg-white"
      options={{
        required: true,
        minLength: 4,
        maxLength: 6000,
      }}
      name="Contraseña"
    />

    <div className="flex items-center justify-between">
      <p className="text-sm text-white">
        No tienes cuenta?
        <Link className="underline font-extrabold" to="/register">
          Registrate
        </Link>
      </p>

      <button
        type="submit"
        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
      >
        Ingresar
      </button>
    </div>
  </form>
  )
}

export default Form