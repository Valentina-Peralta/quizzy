import '../styles/Nav.css'
import quizzy from '../assets/logo.png'
const Nav = ({ difficulty, score, category, restart }) => {
    return (
        <>
            {category === '' || difficulty === '' ?
                <div>
                    <img className='logo' onClick={() => restart()} src={quizzy} alt="" />

                </div> :
                <nav>
                    <img className='logo' onClick={() => restart()} src={quizzy} alt="" />

                    {/*  <ul>
                <li>Categories</li>
                <li>Dificulty</li>
            </ul> */}
                    <h2>Score: {score}</h2>

                </nav>}
        </>

    )
}

export default Nav