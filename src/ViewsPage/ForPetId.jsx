import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPetByIdFn } from "../API/ApiPet";
import { useParams } from "react-router-dom";
import { getUsersFn } from "../API/ApiUsers";

const ForPetId = () => {
  const { petId } = useParams(); // Obtiene el petId de la URL usando useParams
  
  
  
  const { data: pet, isLoading: isLoading, isError: isError } = useQuery({
    queryKey: ["pet-by-id", petId],
    queryFn: () => getPetByIdFn(petId),
  });
  console.log(pet)
  
  

  if (isLoading) {
    return (
      <>
        <h1>Cargando...</h1>
        <hr />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h1>Error</h1>
        <hr />
        <div className="alert alert-danger">Ocurrió un error</div>
      </>
    );
  }
  

  if (pet) {
    console.log(pet.data.instagram)
    return (
      <>
        <section>
          <div className="w-full h-screen bg-gray-100 px-20 pt-20">
            <div className="relative mt-16 mb-32 max-w-lg mx-auto mt-24 border-black">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={pet.data.image}
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-3xl text-center mb-1">
                    {pet.data.name}
                  </h1>
                  <p className="text-gray-800 text-sm text-center">
                    raza : {pet.data.raza}
                  </p>
                  <p className="text-gray-800 text-sm text-center">
                    Direccion : {pet.data.direccion}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    <p className="text-gray-800 text-sm text-center">
                      Informacion Addcional: {pet.data.content}
                    </p>
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <button
                      className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex"
                      type="button"
                    >
                      <a
                        href={`https://wa.me/${pet.data.numberphone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#000000"
                          fill="none"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>{" "}
                        <span className="mt-1 ms-2">WhatsApp</span>
                      </a>
                    </button>
                    <button
                      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ms-2 flex"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        color="#000000"
                        fill="none"
                      >
                        <path
                          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      <span className="mt-1 ms-2">Facebook</span>
                    </button>
                    <button
                      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ms-2 flex"
                      type="button"
                    >
                      <a
                        href={`https://www.instagram.com/${pet.data.instagram}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >

                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        color="#000000"
                        fill="none"
                      >
                        <path
                          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      <span className="mt-1 ms-2">instagram</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return <div></div>;
};

export default ForPetId;
