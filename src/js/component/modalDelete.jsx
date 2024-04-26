import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const ModalDelete = ({ setModal, stateModal, contact }) => { 

    const { store, actions } = useContext(Context)


    function handleDelete() { 
        actions.deleteContact(store.contactToDelete.id)
        setModal({ show: "none" })
    }


    return (
        <div>
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: stateModal.show }}>  
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Estas seguro de eliminar este registro?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => { setModal({ show: "none" }) }}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Si eliminas este registro,no podras recuperarlo </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => { setModal({ show: "none" }) }}>No borrar</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal"
                                onClick={handleDelete}
                            >
                                Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};