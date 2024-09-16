import '../CSS/App.module.css'
import { Menu } from './Menu'

function App() {
  return (
    <div>
      <Menu />

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <section id='aboutMe'>
          <h1>About me!</h1>
          <p>
            My name is Amilton Moreira, 
          </p>
        </section>

        <section id='professionalHistory'>
          <h1>Professional History!</h1>
        </section>

        <section id='projects'>
          <h1>My Projects!</h1>
        </section>

        <section id='contact'>
          <h1>My Contacts!</h1>
        </section>
      </div>

    </div>
  )
}

export default App
