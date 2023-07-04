import { BrowserRouter } from 'react-router-dom'

import Router from '@/router/Router'
import Global from '@/styles/global'

import Footer from './Footer'
import Header from './Header'

const App = () => {
  return (
    <BrowserRouter>
      <Global />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
