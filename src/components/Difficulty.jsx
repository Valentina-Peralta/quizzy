
const Difficulty = ({ difficulty, setDifficulty }) => {
    return (
        <div className="category">
            <h3 className='pulse'>Select dificulty:</h3>

            <ul className='categories'>
                <li
                    onClick={() => setDifficulty(' ')}
                >Any</li>
                <li
                    onClick={() => setDifficulty('&difficulty=easy')}
                >Easy</li>
                <li
                    onClick={() => setDifficulty('&difficulty=medium')}

                >Medium</li>
                <li
                    onClick={() => setDifficulty('&difficulty=hard')}

                >Hard</li>
            </ul>

        </div>)
}

export default Difficulty