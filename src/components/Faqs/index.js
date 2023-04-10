// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {faqsList: props.faqsList}
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="ww">
        <div className="app-bg-container">
          <div className="app-card-container">
            <h1 className="faqs-heading">FAQs</h1>
            <ul className="faqs-list-Container">
              {faqsList.map(eachItem => (
                <FaqItem faqDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Faqs
