import style from '../CSS/App.module.css'
import { Menu } from './Menu'
import Perfil from '../assets/Perfil.jpg'
import Ternaria from '../assets/Ternaria.png'
import AliancaSul from '../assets/AliancaSul.jpg'
import BoschImage from '../assets/BoschImage.jpg'
import MyMovieListImage from '../assets/MyMovieList.png'
import Apt4 from '../assets/Apt4.png'
import Whats from '../assets/whatsapp.png'
import Github from '../assets/Github.png'

function App() {
  return (
    <>
      <Menu />

      <div className={style.BemVindo}>

        <div>
          <h1>
            Hello, World!<br />
            My name is<br />
          </h1>
          <h1>Amilton Moreira</h1>
        </div>

          <img className={style.ImagemBemVindo} src="https://i.pinimg.com/originals/78/5a/1b/785a1b9c359640da6bc9cfe3670b42ba.png" alt="fotoDoBemVindo"/>
      </div>

      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hr/>
      </div>

      <div className={`${style.SobreMim} ${style.RobotoFont}`} id='aboutMe'>

        <img className={`${style.ImagemPerfil}`} src={Perfil} height={'auto'} alt="Foto minha talvez" />

        <br />

        <div className={style.SobreMimTexto}>

          <h1 style={{marginBottom: '30px'}}>Sobre mim</h1>

          <p>
            Meu nome é Amilton Moreira, eu tenho 20 anos e moro em Curitiba, Paraná.
            Comecei a estudar progamação no final de 2023, com Python e Visualg, atualmente
            estou fazendo curso de Desenvolvimento de Sistemas no Senai, sou Aprendiz de
            Soluções Digitais na Bosch Brasil e faço faculdade de Análise e Desenvolvimento
            de Sistemas na PUCPR.
          </p>

        </div>

      </div>

      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hr/>
      </div>

      <div className={`${style.RobotoFont} ${style.Experiencias}`} id='experiences'>
        <div className={`${style.ExperienciasTexto}`}>

          <h1 style={{marginBottom: '30px'}}>Experiências</h1>
          <div>
            <div className={style.Experiencia}>
                <img className={style.ImagemAlianca} src={AliancaSul} alt=""/>

                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '25px', flexWrap: 'wrap'}}>
                  <p>Aliança Sul - Atendente Telemarketing Ativo;</p>
                  <p>Aliança Sul - BackOffice;</p>
                </div>
            </div>

            <div className={style.Experiencia}>
                <img className={style.BoschImage} src={BoschImage} alt=""/>

                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '25px', alignItems: 'center'}}>
                  <p>Bosch - Aprendiz em Soluções Digitais</p>
                </div>
            </div>
          </div>
          

        </div>
        
      </div>

      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hr/>
      </div>

      <div className={`${style.RobotoFont} ${style.Projetos}`} id='projects'>
        
        <div className={`${style.ProjetosTexto}`}>
            <h1 style={{marginBottom: '30px'}}>Projetos</h1>

            <p>
              Alguns projetos que eu desenvolvi ao decorrer de meu aprendizado.
            </p>
        </div>

      </div>

      <div className={`${style.RobotoFont} ${style.SobreProjetos}`}>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a href="https://github.com/AmiltonMn/Ternaria/releases/tag/v1.0.0" target='_blank'><img className={`${style.ImagemTernaria}`} height={200} src={Ternaria} alt="" /></a>
          
          <div className={`${style.DescProjeto} ${style.RobotoFont}`}>
            Ternaria
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a href="https://github.com/AmiltonMn/MyMovieList" target='_blank'><img className={`${style.ImagemTernaria}`} height={200} src={MyMovieListImage} alt="" /></a>
          
          <div className={`${style.DescProjeto} ${style.RobotoFont}`}>
            My Movie List
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a href="https://github.com/AmiltonMn/MyMovieList" target='_blank'><img className={`${style.ImagemTernaria}`} height={200} src={Apt4} alt="" /></a>
          
          <div className={`${style.DescProjeto} ${style.RobotoFont}`}>
            BOSCH-APT4-MAN
          </div>
        </div>

      </div>

      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hr/>
      </div>

      <div className={`${style.RobotoFont} ${style.Contatos}`} id='contact'>

        <h1 style={{marginBottom: '25px'}}>My Contacts!</h1>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <a href="https://wa.me/5541998256176" target='_blank'><img className={style.ImagensContato} src={Whats} alt="" /></a>
          <a href="https://github.com/AmiltonMn" target='_blank'><img className={style.ImagensContato} src={Github} alt="" /></a>
        </div>
      </div>

    </>
  )
}

export default App
