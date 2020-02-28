import React, { useRef } from 'react'
import { changeInterval } from '../services/tickerService'

const timeValues = [500, 1000, 5000, 10000]

const UpdateInterval = () => {
  const selectedValue = useRef(null)
  const dropdown = useRef(null)

  const dropdownChangeState = () => {
    const isCollapsed = dropdown.current.classList.contains('collapsed')
    const newClass = isCollapsed ? 'open' : 'collapsed'
    const oldClass = isCollapsed ? 'collapsed' : 'open'

    dropdown.current.classList.remove(oldClass)
    dropdown.current.classList.add(newClass)
  }

  const dropdownItemClick = value => {
    changeInterval(value)
    selectedValue.current.innerText = `${value / 1000} sec`
    dropdownChangeState()
  }

  return (
    <div className="update-interval">
      <label htmlFor="dropdown-trigger">Update interval: </label>
      <div className="dropdown-container">
        <button onClick={dropdownChangeState} className="dropdown-trigger">
          <span ref={selectedValue} className="value">
            5 sec
          </span>
        </button>
        <ul ref={dropdown} className="dropdown collapsed">
          {timeValues.map(value => (
            <li key={value} onClick={() => dropdownItemClick(value)}>
              <span>{value / 1000} sec</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UpdateInterval
