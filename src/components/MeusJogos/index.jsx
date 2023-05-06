import './style.css'
import dark from '../../assets/dark-souls.png'
import resident from '../../assets/resident-evil.webp'
import god from '../../assets/god-of-war.webp'
import Jogo from '../Jogo'

function MeusJogos() {
    return (
        <section>
            <div>
                <h2>Meus jogos</h2>
                <p>Meus jogos favoritos</p>
                <ul className="games-list">
                    <Jogo
                        link="https://www.twitch.tv/directory/game/Dark%20Souls"
                        img={dark}
                    />

                    <Jogo
                        img={resident}
                        link="https://www.twitch.tv/directory/game/Resident%20Evil"
                    />

                    <Jogo
                        img={god}
                        link="https://www.twitch.tv/directory/game/God%20of%20War"
                    />
                </ul>
            </div>
        </section>

    )
}
export default MeusJogos