// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {filteredMoviesList} = props
  const setting = {
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div className="movie-slider-container">
      <Slider {...setting}>
        {filteredMoviesList.map(eachMovie => (
          <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
