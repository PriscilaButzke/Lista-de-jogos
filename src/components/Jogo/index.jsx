import './style.css'


function Logo({link,img}) {
    return (
        <li>
            <a
                target="_blank"
                href={link}>
                <img src={img} alt="Imagem do jogo Dark Souls" />
            </a>
        </li>
    )
}
export default Logo