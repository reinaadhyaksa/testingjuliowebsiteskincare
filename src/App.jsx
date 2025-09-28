import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { HomePage } from './pages/HomePages'
import Produk from './pages/ProductsPages'
import AboutPages from './pages/AboutPages'
import Contact from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true
      })
    })
  }, [])

  return (
    <Router>
      <div className="bg-black text-white overflow-x-hidden">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/produk' element={<Produk />} />
          <Route path='/tentang' element={<AboutPages />} />
          <Route path='/kontak' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App