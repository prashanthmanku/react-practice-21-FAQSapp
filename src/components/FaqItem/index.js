// Write your code here.
import {Component} from 'react'
import './index.css'

const plusicon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isAnswerActive: false}

  clickToshowHideAnswer = () => {
    this.setState(prevState => ({isAnswerActive: !prevState.isAnswerActive}))
  }

  render() {
    const {isAnswerActive} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    return (
      <li className="faq-item-container">
        <div className="quation-container">
          <h1 className="quation-text">{questionText}</h1>
          <button type="button" onClick={this.clickToshowHideAnswer}>
            <img
              src={isAnswerActive ? minusIcon : plusicon}
              alt={isAnswerActive ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {isAnswerActive && <p className="answer-text">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
