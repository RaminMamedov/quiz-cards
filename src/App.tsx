import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@/services/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={'App'}>
        <h1>Decks</h1>
        <div></div>
      </div>
    </Provider>
  )
}

export default App
