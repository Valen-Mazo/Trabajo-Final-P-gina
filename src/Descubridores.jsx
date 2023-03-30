import React from 'react'

function Descubridores(props) {
    return(
        <div className="row mx-5">
{/*   <h1 className="baogan d-flex justify-content-center rounded text-lg-start mt-5 text-radgivare" id="descubridores">{props.titulos}</h1> */}

  <div className="card carddes color2 mt-4">
      <div className="card-body">
          <div className="d-flex">
              <img  src={`./Multimedia/${props.imgcar}.png`} alt="objetivo" className="img-objetivo rounded-circle"/>
              <div className="ps-3">
                  <h1 className="mb-0 text-radgivare d-flex justify-content-center">{props.subtitulo}</h1>
              
              </div>
          </div>
          <div>
              <p className="fs-5 fw-semibold lh-sm ">Somos los creadores de Baogan y nuestro objetivo es exponer el uso negativo de la pólvora por medio de un videojuego.</p>
            
          </div>
      </div>
  </div>

{/* <div className="col-12 col-lg-4 b-c">
  <div className="card color2 mt-4">
      <div className="card-body">
          <div className="d-flex">
              <img src="./Multimedia/mision1.png" alt="objeti" className=" img-mision rounded-circle"/>
              <div className="ps-3">
                  <h1 className="mb-0 text-radgivare d-flex justify-content-center">Misión</h1>
              
              </div>
          </div>
          <div>
              <p className="fs-5 fw-semibold lh-sm ">Enseñar a los jóvenes mediante los videojuegos las consecuencias que ocasiona el uso de la pólvora en el medio ambiente, los animales y las personas.</p>

          </div>
      </div>
  </div>
</div>
<div className="col-12 col-lg-4 b-c">
  <div className="card color2 mt-4">
      <div className="card-body">
          <div className="d-flex">
              <img  src="./Multimedia/vision.png" alt="objeti" className="img-vision rounded-circle"/>
              <div className="ps-3">
                  <h1 className="mb-0 text-radgivare d-flex justify-content-center">Visión</h1>
              
              </div>
          </div>
          <div>
              <p className="fs-5 fw-semibold lh-sm ">Lograr un cambio positivo en la juventud frente a la pólvora y concientizarse de las consecuencias que ocasiona esta, generando una mejor calidad ambiental, para los animales y las personas</p>

          </div>
      </div>
  </div>
</div> */}
</div>
    )
}
export default Descubridores