import React from "react";
import Form from "./Form";

const FormLogin = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center  bg-violet-700 mb-20">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 rounded-lg">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl text-cyan-50">
            Iniciar Session
          </h1>

          <p className="mt-4 text-gray-500"></p>
        </div>

        <Form/>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://cdn.me-qr.com/n1ed/files/me-qr/%D0%A1%D0%BB%D0%BE%D0%B8%CC%86%2014.svg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default FormLogin;
