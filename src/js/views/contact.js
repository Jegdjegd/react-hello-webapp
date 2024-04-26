import React, { useContext, useEffect, useState } from "react"; 
import { Context } from "../store/appContext.js"; 
import { ContactCard } from "../component/contactCard.jsx";
import { ModalDelete } from "../component/modalDelete.jsx";

export const Contact = () => {

	const [state,setState] = useState({
		show: "none"
	})


	const { store, actions } = useContext(Context) 

	useEffect(() => {
		actions.getAllContacts()
	}, [])

	return (
		<div>
			{
				store.contacts && store.contacts.length > 0 && store.contacts.map((contact) => {
					return (
						
						<div key={contact.id}
							className="container-fluid my-2 py-5"
						>
							<ContactCard  
							contact={contact} 
							setModal={setState}
							/> 

							<ModalDelete 
							setModal={setState}
							stateModal={state}
							contact={contact}
							/>
						
						</div>
					)
				})
			}
		</div>
	);
};