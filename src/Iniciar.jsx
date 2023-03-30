import React from 'react'

function Iniciar() {
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5 text-radgivare" id="exampleModalLabel">Registrate</h1>
                    <button  type="button" className="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="container">
                        <div className="card p-3">
                            <div className="mb-3">
                                <form action="">
                                    <div className="mb-3">
                                     
                                        <input className="form-control text-louis-george" type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                                    </div>
                                    <div className="mb-3">
                                    
                                        <input className="form-control text-louis-george" type="text" name="apellidos" id="apellidos" placeholder="Apellidos"/>
                                    </div>
                                    <div className="mb-3">
                                    
                                        <input className="form-control text-louis-george" type="text" name="correo" id="correo" placeholder="Correo electronico"/>
                                    </div>
                                    <div className="mb-3">
                                       
                                        <input className="form-control text-louis-george" type="text" name="numero" id="numero" placeholder="Celular"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn enviar" >Enviar</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Iniciar