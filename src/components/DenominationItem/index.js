// Write your code here

import './index.css'

const DenominationItem = props => {
  const {value, onMoneyChange} = props
  const onIncrement = () => {
    onMoneyChange(value)
  }

  return (
    <li className="list-container">
      <button type="button" onClick={onIncrement}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
