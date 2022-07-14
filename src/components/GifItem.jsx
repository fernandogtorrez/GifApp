import Swal from "sweetalert2";
import 'animate.css';
import PropTypes from 'prop-types'

export const GifItem = ({title,url,id,handleFilterGif}) => {

  const handleModal = () => {
    Swal.fire({

      imageUrl: url,
      imageWidth: 1000,
      imageHeight: '90%',
      text: title,
      imageAlt: "Custom image",
      confirmButtonText:
    'X',
    
      color: "#fff",
      background: "#191a19",
      backdrop: "#0000008a",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  return (
    <div className="card-container-image">
      <div className="card-image">
          <img className="card-picture" src={url} alt='gif' onClick={handleModal}/>
          <p className="title-image">{title}</p>
      </div>
      <div className="btn-delete">
            <button className="btn" onClick={()=>handleFilterGif(id)}>Delete Gif</button>
      </div>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
