import '../styles/app.scss'
import { connect } from '../services'
import React, { PureComponent } from 'react'

// The below line is here as an example of getting prices
connect('AAPL', data => {
  console.log(data)
})

class App extends PureComponent {
  render() {
    return (
      <div className="stock-ticker">
        <h1>Stock Blotter</h1>
      </div>
    )
  }
}

export default App