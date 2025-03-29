import { BrowserRouter } from 'react-router-dom'
import Preloader from './components/Preloader'
import Landing from './components/Landing'

function App() {

  return (
    <BrowserRouter>
      <Preloader />
      <Landing />
    </BrowserRouter>
  )
}

export default App
