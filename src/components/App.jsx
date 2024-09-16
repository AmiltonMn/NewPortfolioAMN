import style from '../CSS/App.module.css'
import { Menu } from './Menu'
import Perfil from '../assets/Perfil.jpg'
import BoschImage from '../assets/Bosch.jpg'
import BoschImage70Anos from '../assets/Bosch70Anos.jpg'
import Ternaria from '../assets/Ternaria.png'
import AliancaSul from '../assets/AliancaSul.png'

function App() {
  return (
    <div>
      <Menu />

      <div className={style.BemVindo}>
          <h1>Bem vindo ao meu Portfolio!</h1>

          <img className={style.ImagemBemVindo} src="https://i.pinimg.com/originals/78/5a/1b/785a1b9c359640da6bc9cfe3670b42ba.png" alt="fotoDoBemVindo"/>
      </div>

      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hr style={{width: '95%'}}/>
      </div>

      <div className={`${style.SobreMim} ${style.RobotoFont}`} id='aboutMe'>

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
            de Sistemas na PUCPR.
          </p>

        </div>

      </div>

      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hr style={{width: '95%'}}/>
      </div>

      <div className={`${style.RobotoFont} ${style.Experiencias}`} id='experiences'>
        <div className={`${style.ExperienciasTexto}`}>

          <div>
            <h1 style={{marginBottom: '30px'}}>Experiências</h1>
            <div style={{flexDirection: 'column'}}>
                <img src={AliancaSul} alt="" style={{borderRadius: '999px'}}/>
                <div>
                  <p>Aliança Sul - Atendente Telemarketing Ativo;</p>
                  <p>Aliança Sul - BackOffice;</p>
                </div>
            </div>     
              
              Bosch - Aprendiz em Soluções Digitais.
          </div>
          

        </div>

        <img className={style.BoschImage} src={BoschImage} alt="" width={350}/>
        <img className={style.BoschImage} src={BoschImage70Anos} alt="" width={350}/>
        
      </div>

      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <hr style={{width: '95%'}}/>
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

        <div>
            <a href="https://github.com/AmiltonMn/Ternaria"><img className={style.ImagemTernaria} src={Ternaria} alt="" width={600}/></a>
        </div>

        <div style={{width: '40%', marginLeft: '40px'}}>
          <h1 style={{marginBottom: '30px'}}>Ternaria</h1>

          <p>Este projeto foi desenvolvido para a conclusão da matéria de Lógica de Programação que tive no Senai. Ele foi desenvolvido com meus dois colegas Fernando e Eduardo Ribeiro</p>
        </div>

      </div>

      <div className={`${style.RobotoFont} ${style.SobreProjetos}`}>

        <div style={{width: '40%', marginRight: '40px'}}>
          <h1 style={{marginBottom: '30px'}}>My Movie List</h1>

          <p>Este projeto foi desenvolvido para a finalização da matéria de Web, onde nosso objetivo era fazer um site com CRUD. O projeto foi desenvolvido em conjunto com meu colega Fernando.</p>
        </div>

        <div>
            <a href="https://github.com/AmiltonMn/Ternaria"><img className={style.ImagemTernaria} src={Ternaria} alt="" width={600}/></a>
        </div>

      </div>

      <div id='contact'>
        <h1>My Contacts!</h1>
      </div>

    </div>
  )
}

export default App
