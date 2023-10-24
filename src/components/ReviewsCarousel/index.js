// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    counter: 0,
  }

  onClickChangeProfile = () => {
    const {counter} = this.state
    if (counter > 0) {
      this.setState(prevState => ({counter: prevState.counter - 1}))
    }
  }

  onClickChangeProfileFirst = () => {
    const {counter} = this.state
    if (counter < 3) {
      this.setState(prevState => ({counter: prevState.counter + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {counter} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[counter]
    return (
      <div className="background">
        <div className="bg-container">
          <div className="button-container">
            <button
              className="side-button"
              type="button"
              onClick={this.onClickChangeProfile}
              data-testid="leftArrow"
            >
              <img
                className=""
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              />
            </button>
          </div>
          <div className="bg-center">
            <h1 className="heading">Reviews</h1>
            <img src={imgUrl} alt={username} className="" />

            <p className="heading">{username}</p>
            <p className="paragraph">{companyName}</p>
            <p className="paragraph last-paragraph">{description}</p>
          </div>
          <div className="button-container">
            <button
              className="side-button"
              type="button"
              onClick={this.onClickChangeProfileFirst}
              data-testid="rightArrow"
            >
              <img
                className=""
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
