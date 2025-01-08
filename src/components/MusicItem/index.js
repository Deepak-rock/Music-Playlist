import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDelete = () => {
    deleteTrack(id)
  }

  return (
    <li className="track-item">
      <div className="track-container">
        <div className="track-details-container">
          <div className="tracks-cart">
            <img src={imageUrl} className="music-img" alt="track" />
            <div>
              <p className="song-name">{name}</p>
              <p className="song-genre">{genre}</p>
            </div>
          </div>
        </div>
        <div className="duration-container">
          <p className="song-duration">{duration}</p>
          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={onClickDelete}
          >
            <AiOutlineDelete size={36} />
          </button>
        </div>
      </div>
    </li>
  )
}
export default MusicItem
