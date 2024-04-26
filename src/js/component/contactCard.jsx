import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";


export const ContactCard = ({ contact, setModal }) => {

	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	return (
		<>
	
		<div className=" container w-75  glass p-3 rounded mb-3">

				<div className=" row d-flex text-center text-white">

					<div className="row justify-content-around m-3 ">

							<div className="col col-md-2 m-3 mx-2">
								<img src="https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/03/04/6F3E2E33-8AAF-4607-8B3E-80261F00FB86/naruto_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=high&format=webply" 
								className="m-2 rounded" style={{width:"16vw", height:"10vw"}} />
							</div>

							<div className="container w-50  col col-md-2  ">

								<div  className="aling-center text-center mx-5">
									<h4 className="card-title fs-2">
										{contact?.name}
									</h4>

									<h6 className="row d-flex  flex-row fs-4">
										<i className=" col-auto p-2 fa-solid fa-envelope "></i>
										<p className="col-auto float-start">{contact?.email}</p>
										
									</h6>
									
									<h6 className="row d-flex flex-row  text-body-secondary fs-4">
										<i className="col-auto p-2 fa-solid fa-location-dot "></i>
										<p className="col-auto float-start"> {contact?.address}</p> 
									</h6>

									<h6 className="row d-flex flex-row fs-4">
										<i className="col-auto p-2 fa-solid fa-phone-flip"></i>
										<p className="col-auto float-start"> {contact?.phone}</p> 
									</h6>

								</div>
							</div>

							<div className="col col-md-2 fs-4 ">

								<div className="col-auto  p-2 py-2">
									<span  onClick={() => {
										actions.seeContact(contact)
										navigate("/editcontact")
										}}
										className="pointers m-3"
										> 
									<i className="fa-solid fa-pencil "></i>
									
									</span>

									<span onClick={()=>{
										actions.contactToDelete(contact)
										setModal({show:"block"})
									}}
									className="pointers m-3"

									> 
									<i className="fa-solid fa-trash-can"></i>
									</span>
								</div> 
							</div>
					</div>
		</div>
		</div>
	
	</>
	);
};


