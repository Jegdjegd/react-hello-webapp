import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    
    function handleSubmit(e) {
        e.preventDefault()
        const contact = {
            name,
            email,
            address,
            phone
        }
        actions.createContact(contact)
        navigate("/")
        actions.getAllContacts()

      
    }

    return (

            <div className=" center ">

                <div className=" glass p-3  text-white ">
                    <h1 className="title">Agregar nuevo contacto</h1>
                    
                    <form onSubmit={handleSubmit} >

                        <div className="">
                            <label htmlFor="exampleInputName" className="form-label">Nombre</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputName" 
                                aria-describedby="nameHelp" 
                                placeholder="Introduce tu nombre" 
                                onChange={(event) => { setName(event.target.value) }} 
                                />
                        </div>

                        
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introducir Correo" onChange={(event) => { setEmail(event.target.value) }} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label">Teléfono</label>
                            <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Introducir Teléfono" onChange={(event) => { setPhone(event.target.value) }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputAddress" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Introduce tu dirección" onChange={(event) => { setAddress(event.target.value) }} />
                        </div>
                        
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="save m-3 btn btn-success" style={{ transition: "all 0.5s ease" }}>Guardar Contacto
                            </button>

                            <Link to="/">
                                <button type="submit" className="save m-3 btn btn-primary" style={{ transition: "all 0.5s ease" }}>Regresa a los contactos </button>
                            </Link>
                        </div>

                    </form>
                </div>
              </div>
    );
};