import React, { useContext, useEffect, useState } from "react"; 
import { Context } from "../store/appContext.js"; 
import { ModalDelete } from "../component/modalDelete.jsx";

export const Cards = () => {

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
						
						<div key={contact.id}>
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