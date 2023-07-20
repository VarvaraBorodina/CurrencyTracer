import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import Router from '@/components/Router'
import { persistor, store } from '@/store'
import Global from '@/styles/global'

import ErrorBoundary from './ErrorBoundary'
import Footer from './Footer'
import GlobalThemProvider from './GlobalThemeProvider'
import Header from './Header'

const App = () => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default App
