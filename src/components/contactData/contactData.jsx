"use client";

import { useContext } from "react";
import { AllDataCollect } from "../context/AllData";

const ContactData = ({ person, type, children }) => {
  const { CollectData, setCollectData } = useContext(AllDataCollect);

  const handleAction = () => {
    alert('click')
  const newData = [...CollectData, { type, person }];
  setCollectData(newData);

  console.log(newData); 
};

  return (
    <button onClick={handleAction}>
      {children}
    </button>
  );
};

export default ContactData;