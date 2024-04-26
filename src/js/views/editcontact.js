import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState(store.contact);
  const handleChange = (event) => {
    console.log(event);
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  console.log(store.contact);

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: "PUT",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      `https://playground.4geeks.com/contact/agendas/jegdjegd/contacts/${contact.id}`,
      config
    )
      .then((response) => response.json())
      .then((data) => {
        actions.getAllContacts();
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
   

<div className=" center ">

<div className=" glass p-3  text-white ">
    <h1 className="title">Editar contacto</h1>
    
    <form onSubmit={handleSubmit} >

        <div className="">
            <label htmlFor="exampleInputName" className="form-label">Nombre</label>
              <input 
                type="text" 
                name="name"
                className="form-control" 
                id="exampleInputName" 
                aria-describedby="nameHelp" 
                placeholder="Introduce tu nombre"
                value={contact.name} 
                onChange={(e) => handleChange(e)}                
              />
        </div>

        
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
              <input 
                type="email"
                name="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Introducir Correo" 
                value={contact.email}
                onChange={(e) => handleChange(e)}
              />
        </div>


        <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">Teléfono</label>
              <input 
                type="phone" 
                name="phone" 
                className="form-control" 
                id="exampleInputPhone" 
                aria-describedby="phoneHelp" 
                placeholder="Introducir Teléfono" 
                value={contact.phone}
                onChange={(e) => handleChange(e)}
              />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">Dirección</label>
              <input 
                type="text" 
                name="address" 
                className="form-control" 
                id="exampleInputAddress" 
                aria-describedby="addressHelp" 
                placeholder="Ingresa tu dirección" 
                value={contact.address} 
                onChange={(e) => handleChange(e)} 
              />
        </div>
        
        <div className="d-flex justify-content-between">
        <button type="submit" className="save m-3 btn btn-success" style={{ transition: "all 0.5s ease" }}>Guardar Edición</button>

        <Link to="/">
            <button type="submit" className="save m-3 btn btn-primary" style={{ transition: "all 0.5s ease" }}>Regresa a los contactos </button>
        </Link>
        </div>

    </form>
</div>
</div>

  );
};
