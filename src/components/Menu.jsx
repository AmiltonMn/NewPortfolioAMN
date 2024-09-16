import style from '../CSS/Menu.module.css'

export const Menu = () => {

    return (
        <div className={style.RobotoFont} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'grey', height: '50px', flexWrap: 'wrap'}}>
            <div style={{marginLeft: '20px'}}>
                <h1>Amilton</h1>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '40%'}}>
                <a href="#aboutMe"><b>Sobre Mim</b></a>
                <a href="#experiences"><b>Experiências</b></a>
                <a href="#projects"><b>Projetos</b></a>
                <a href="#contact"><b>Contatos</b></a>
            </div>
        </div>
    )
}