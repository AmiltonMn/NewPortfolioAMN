import '../CSS/Menu.module.css'

export const Menu = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'grey', height: '50px', flexWrap: 'wrap'}}>
            <div style={{marginLeft: '20px'}}>
                <h1>Amilton</h1>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '40%'}}>
                <a href="#aboutMe">About me</a>
                <a href="#professionalHistory">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contacts</a>
            </div>
        </div>
    )
}