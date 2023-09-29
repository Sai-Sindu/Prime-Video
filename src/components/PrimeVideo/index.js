// Write your code here
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-container">
        <h1 className="movies-title">Action Movies</h1>
        <div className="movies-slider-container">
          <MoviesSlider
            filteredMoviesList={moviesList.filter(
              eachMovie => eachMovie.categoryId === 'ACTION',
            )}
          />
        </div>
        <h1 className="movies-title">Comedy Movies</h1>
        <div className="movies-slider-container">
          <MoviesSlider
            filteredMoviesList={moviesList.filter(
              eachMovie => eachMovie.categoryId === 'COMEDY',
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
