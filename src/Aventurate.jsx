import React from 'react'

function Aventurate() {
    return (

        <div className="row sec-modal mt-5">
                           
                            <div className="col-12 col-lg-4 mt-5">
                                <div className="modal-bao">
                                    <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#modal-evito"> <img className="w-100" src="./Multimedia/Evita.png" alt=""/>
                                        <h4 className="text-white">Ver más...</h4>
                                    </button> 
                                    
           
                                     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                            <h1 className="modal-title fs-5 text-radgivare" id="staticBackdropLabel">Héroe: Evita</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body text-louis-george">
                                                Tiene como función ayudar a los aldeanos, tiene como objetivo salvar vidas y lograr destruir a Baogan.
                                            </div>
                                            <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                          
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                          </div>
                          <div className="col-12 col-lg-4 b-c">
                            <div className="modal-bao mt-5">
                                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#modal-evito"> <img className="w-100" src="./Multimedia/Evito.png" alt=""/>
                                    <h4 className="text-white">Ver más...</h4>
                                </button> 
                                
                                
                            
                               <div className="modal fade" id="modal-evito" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-radgivare" id="staticBackdropLabel">Héroe: Evito</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body text-louis-george">
                                            Tiene como objetivo salvar vidas y lograr destruir a Baogan, tratando de que los animaels, aldeanos y medio ambiente no se vea perjudicado.
                                        </div>
                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div> 
                          </div>
                          <div className="col-12 col-lg-4 b-c">
                            <div className="modal-bao mt-5">
                                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#modal-baogan"> <img className="w-100" src="./Multimedia/Baogan.png" alt=""/>
                                    <h4 className="text-white">Ver más...</h4>
                                </button> 
                                
                                
                          
                               <div className="modal fade" id="modal-baogan" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-radgivare" id="staticBackdropLabel">Villano: Baogan</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body text-louis-george">
                                            Tiene como función atacar a la población y destruir el mundo, afectando tanto el medio ambiente, como a las personas y animales.
                                        </div>
                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                          </div>
      

    )
}
export default Aventurate
