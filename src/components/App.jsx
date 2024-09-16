import '../CSS/App.module.css'
import { Menu } from './Menu'

function App() {
  return (
    <div>
      <div>
        <Menu />
      </div>

      <div id='aboutMe'>
        <h1>Pra cá</h1>
      </div>
      
      <div id='professionalHistory'>
        <h1>Histórico Profissional!</h1>
      </div>
    </div>
  )
}

export default App
