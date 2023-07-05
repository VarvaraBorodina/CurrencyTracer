import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import Router from '@/router/Router'
import { persistor, store } from '@/store'
import Global from '@/styles/global'

import Footer from './Footer'
import GlobalThemProvider from './GlobalThemeProvider'
import Header from './Header'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalThemProvider>
          <BrowserRouter>
            <Global />
            <Header />
            <Router />
            <Footer />
          </BrowserRouter>
        </GlobalThemProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
