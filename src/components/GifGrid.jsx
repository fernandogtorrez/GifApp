import { useFetchGif } from "../hooks/useFetchGif"
import { GifItem } from "./GifItem"

export const GifGrid = ({category,removeCategory}) => {

  const handleFilterGif = id =>{
    setImagenes(imagenes.filter(imagen => imagen.id !== id));
    console.log('hola')
}

  const {imagenes, loading, setImagenes} = useFetchGif(category)
  
  return (
    <>
        <div className="card-category">
          <div className="title-delete">
            <h3 className="category">{category}</h3>
            <button className='btn delete' onClick={()=>removeCategory(category)}>X</button>
          </div>
          {/* Desplegar Listado */}
          <div className="card-grid">
            {
            loading ? <h2>Cargando...</h2> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} handleFilterGif ={handleFilterGif} />)
          }
          </div>
        </div>
    </>
  )
}
