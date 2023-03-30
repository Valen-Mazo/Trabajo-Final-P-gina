import React from 'react'


function Menu() {
  return (
    <div>
       <div  className="row menu bg-white  d-flex justify-content-center" > 
            <div className="col-12 mt-4 d-flex justify-content-center">
                <img className="logo img-fluid " src="./Multimedia/logo.png"  alt=""/>
            </div>
        <div className="col-12 col-lg-8 justify-content-center me-5 align-items-center navbar navbar-expand-lg">
            <ul className="nav nav-pills nav-fill img-fluid text-holyfat barra-menu">
              <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse text-radgivare mt-5" id="navbarNav">
                <div className="navbar-nav">
                <li className="nav-item me-4">
                  <a className="nav-link"   aria-current="page" href="#baogan">Baogan</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link"  href="#descubridores">Descubridores</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#aventurate">Aventúrate</a>
                </li>
                <li className="nav-item me-4 mb-5">
                  <a className="nav-link"  data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Iniciar sesión </a>
                </li>
               
            </div>
        </div>
    </ul>
</div>
</div>

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
    </div>
  )
}

export default Menu