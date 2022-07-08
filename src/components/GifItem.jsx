
export const GifItem = ({title,url}) => {
  return (
    <div className="card-container-image">
      <div className="card-image">
          <img className="card-picture" src={url} alt='gif'/>
          <p className="title-image">{title}</p>
      </div>
    </div>
  )
}
