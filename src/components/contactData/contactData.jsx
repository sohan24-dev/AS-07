"use client";

import { useContext } from "react";
import { AllDataCollect } from "../context/AllData";
import { Bounce, toast } from "react-toastify";

const ContactData = ({ person, type, children }) => {
  const { CollectData, setCollectData } = useContext(AllDataCollect);

  const handleAction = () => {
    toast.success(`${type} with ${person.name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    const newData = [...CollectData, { type, person }];
    setCollectData(newData);

    console.log(newData); 
  };

  return (
    <button onClick={handleAction} className="cursor-pointer">
      {children}
    </button>
  );
};

export default ContactData;