
export const GifItem = ({title,url}) => {
  return (
    <div>
        <img src={url} alt='gif'/>
        <p>{title}</p>
    </div>
  )
}
