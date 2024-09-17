import style from '../CSS/Menu.module.css'

export const Menu = () => {

    return (
        <div className={`${style.RobotoFont} ${style.Header}`}>
            <div style={{marginLeft: '20px'}}>
                <h1>Amilton</h1>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '30%', flexWrap: 'wrap'}}>
                <a href="#aboutMe"><b>Sobre Mim</b></a>
                <a href="#experiences"><b>Experiências</b></a>
                <a href="#projects"><b>Projetos</b></a>
                <a href="#contact"><b>Contatos</b></a>
            </div>
        </div>
    )
}