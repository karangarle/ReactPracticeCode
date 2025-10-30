import React from 'react'
import Card from './components/Card';

function App() {
  return (
    <div>
      <div className='header'>
        <div>
          <h1>Header</h1>
        </div>
      </div>
      <div className='center'>
        <Card />
      </div>
      <div className='footer'>
        <div>
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  )
}

export default App