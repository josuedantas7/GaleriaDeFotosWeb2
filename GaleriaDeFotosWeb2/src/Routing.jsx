import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Album from './Album'
import TituloPrimario from './components/TituloPrimario'
import Photo from './Photo'

const Routing = () => {
  return (
    <Router>
        <TituloPrimario/>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/album/:id' element={<Album />}/>
            <Route path='/photo/:id' element={<Photo />}/>
        </Routes>
    </Router>
  )
}

export default Routing
