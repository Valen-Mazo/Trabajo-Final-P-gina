import { useState } from 'react'
import Menu from './Menu'
import Introduccionb from './Introduccionb'
import Secbaogan from './Secbaogan'
import Descubridores from './Descubridores'
import TituloAven from './TituloAven'
import Aventurate from './Aventurate'
import ObjetivoAven from './ObjetivoAven'
import Piepagina from './Piepagina'

function App() {

  return (
    <section className='container-fluid'>
      <Menu />
      <Introduccionb />
      <TituloAven
      titulos="Baogan"/>
      <Secbaogan/>
      <TituloAven
      titulos="Descubridores"/>
      <div className='row'>

        <div className='className="col-12 col-lg-4 b-c'>
      <Descubridores
        subtitulo="Objetivo"
        imgcar="objetivo"
        contenido="Somos los creadores de Baogan y nuestro objetivo es exponer el uso negativo de la pólvora por medio de un videojuego."/>
          </div>

        <div className='className="col-12 col-lg-4 b-c'>
          <Descubridores
        subtitulo="Misión"
        imgcar="mision1"
        contenido="Enseñar a los jóvenes mediante los videojuegos las consecuencias que ocasiona el uso de la pólvora en el medio ambiente, los animales y las personas."/>
        </div>
        
        <div className='className="col-12 col-lg-4 b-c'>
          <Descubridores
        subtitulo="Visión"
        imgcar="vision"
        contenido="Lograr un cambio positivo en la juventud frente a la pólvora y concientizarse de las consecuencias que ocasiona esta, generando una mejor calidad ambiental, para los animales y las personas"/>
        </div>

        </div>
      <TituloAven 
      titulos="Aventúrate"/>
      <Aventurate/>
      <ObjetivoAven />
      <Piepagina />
    </section>


  )
}

export default App
