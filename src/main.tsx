import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App'
import store, { persister } from './app/store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
