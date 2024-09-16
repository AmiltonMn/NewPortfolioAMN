import style from '../CSS/App.module.css'
import { Menu } from './Menu'
import Perfil from '../assets/Perfil.jpg'
import BoschImage from '../assets/Bosch.jpg'

function App() {
  return (
    <div>
      <Menu />

      <div className={style.BemVindo}>
          <h1>Bem vindo ao meu Portfolio!</h1>

          <img className={style.ImagemBemVindo} src="https://i.pinimg.com/originals/78/5a/1b/785a1b9c359640da6bc9cfe3670b42ba.png" alt="fotoDoBemVindo"/>
      </div>


      <div className={`${style.SobreMim} ${style.RobotoFont}`}>


        <div>
            <img className={`${style.ImagemPerfil}`} src={Perfil} width={400} height={'auto'} alt="Foto minha talvez" />
        </div>


        <br />

        <div className={style.SobreMimTexto}>

          <h1 style={{marginBottom: '30px'}}>Sobre mim</h1>

          <p>
            Meu nome é Amilton Moreira, eu tenho 20 anos e moro em Curitiba, Paraná.
            Comecei a estudar progamação no final de 2023, com Python e Visualg, atualmente
            estou fazendo curso de Desenvolvimento de Sistemas no Senai, sou Aprendiz de
            Soluções Digitais na Bosch Brasil e faço faculdade de Análise e Desenvolvimento
            de Sistemas na PUCPR
          </p>

        </div>

      </div>

      <div className={`${style.RobotoFont} ${style.Experiencias}`}>
        <div className={`${style.ExperienciasTexto}`}>

          <h1 style={{marginBottom: '30px'}}>Experiências</h1>

          <ul>
            <li>Aliança Sul - Atendente Telemarketing Ativo</li>
            <li>Aliança Sul - BackOffice</li>
            <li>Bosch - Aprendiz em Soluções Digitais</li>
          </ul>

        </div>

        <img className={style.BoschImage} src={BoschImage} alt="" width={350}/>
        
      </div>

      <div id='projects'>
        <h1>My Projects!</h1>
      </div>

      <div id='contact'>
        <h1>My Contacts!</h1>
      </div>

    </div>
  )
}

export default App
