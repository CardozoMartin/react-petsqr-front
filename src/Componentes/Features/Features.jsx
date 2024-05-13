const Features = () => {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://me-qr.com/static/pages/blog-card-img/blog-top-img.svg"
                class="absolute inset-0 h-full w-full object-cover text-center"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl text-center">
                ¿Cómo Crear, Usar Y Compartir Códigos QR?
              </h2>

              <div class="mt-4 text-gray-600 items-center">
                <h5 className="text-center">
                  Si necesita mas informacion de como crear su cuenta y crear su
                  QR para su mascota
                </h5>
                <br/>
                <p className="text-center">
                  Toda la informacion de como crear su cuenta y cargar y
                  mantener toda la informacion de sus mascotas detallada!
                </p>
              </div>
              <div className="flex justify-center">
                <a class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                  Mas info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
