// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <div className="movie-item-card">
          <img src={thumbnailUrl} alt="thumbnail" className="movie-item-img" />
        </div>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-popup">
          <button
            className="close-button"
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose className="icon" />
          </button>
          <ReactPlayer url={videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
