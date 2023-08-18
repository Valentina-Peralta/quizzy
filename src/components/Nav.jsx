import '../styles/Nav.css'
import quizzy from '../assets/logo.png'
const Nav = ({ score, category, setCategory }) => {
    return (
        <>
            {category === '' ?
                <div>
                    <img className='logo' src={quizzy} alt="" />

                </div> :
                <nav>
                    <img className='logo' onClick={() => setCategory('')} src={quizzy} alt="" />

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