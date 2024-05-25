import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import QRCode from "react-qr-code";
import { getPetFn } from "../../../API/ApiPet";

const PetInfo = () => {
  const {
    data: pet,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["pet"], queryFn: getPetFn });
  const [showContact, setShowContact] = useState(false);

  // URL de redirección con datos de contacto
  const contactUrl = `/contact?petId=${pet.id}&owner=${pet.owner}&phone=${pet.phone}`;

  return (
    <div>
      <h2>{pet.name}</h2>
      <p>Raza: {pet.raza}</p>
      <p>Tipo: {pet.tipo}</p>
      <button onClick={() => setShowContact(true)}>
        Mostrar datos de contacto
      </button>
      {showContact && (
        <div>
          <p>Dueño: {pet.owner}</p>
          <p>Teléfono: {pet.phone}</p>
        </div>
      )}
      {/* Genera el código QR con la URL de redirección */}
      <QRCode
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="Q"
        style={{ width: 128 }}
        value={contactUrl}
      />
    </div>
  );
};

export default PetInfo;
