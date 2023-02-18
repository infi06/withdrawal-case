// Write your code here

import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

export default class CashWithdrawal extends Component {
  state = {money: 2000}

  onMoneyChange = value => {
    this.setState(prevState => ({money: prevState.money - value}))
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="cart">
          <h1 className="head">Sarah Williams</h1>

          <p className="para">Your Balance</p>
          <p className="para">{money}</p>
          <p className="heading">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>

          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                value={each.value}
                onMoneyChange={this.onMoneyChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
