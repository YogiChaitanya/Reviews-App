// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeArrow: 0}

  onClickLeft = () => {
    const {activeArrow} = this.state
    if (activeArrow > 0) {
      this.setState(prevState => ({activeArrow: prevState.activeArrow - 1}))
    }
  }

  onClickRight = () => {
    const {activeArrow} = this.state
    if (activeArrow < 3) {
      this.setState(prevState => ({activeArrow: prevState.activeArrow + 1}))
    }
  }

  render() {
    const {activeArrow} = this.state
    const {reviewsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="r-heading">Reviews</h1>
          <img
            src={reviewsList[activeArrow].imgUrl}
            className="photo"
            alt={reviewsList[activeArrow].username}
          />

          <div className="arrows-container">
            <button
              id="leftArrow"
              type="button"
              className="arrow-btn"
              onClick={this.onClickLeft}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow-img"
                alt="left arrow"
              />
            </button>

            <p className="user-name">{reviewsList[activeArrow].username}</p>

            <button
              id="rightArrow"
              type="button"
              className="arrow-btn"
              onClick={this.onClickRight}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow-img"
                alt="right arrow"
              />
            </button>
          </div>
          <p>{reviewsList[activeArrow].companyName}</p>

          <p>{reviewsList[activeArrow].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
