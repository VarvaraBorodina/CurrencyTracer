import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Router from '@/router/Router'
import store from '@/store'
import Global from '@/styles/global'

import Footer from './Footer'
import GlobalThemProvider from './GlobalThemeProvider'
import Header from './Header'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalThemProvider>
        <BrowserRouter>
          <Global />
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </GlobalThemProvider>
    </Provider>
  )
}

export default App
