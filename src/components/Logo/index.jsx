import './style.css'
import Ulbra from '../../assets/ulbra-csl.jpeg'

function Logo() {
    return (
        <header>
            <div>
                <img 
                src={Ulbra}
                alt="Foto de perfil" />
            </div>
        </header>
    )
}
export default Logo