import '../styles/Categories.css'
const Categories = ({ setCategory }) => {
    return (
        <div className="category">
            <h3>Select category:</h3>
            <ul className='categories'>
                <li
                    onClick={() => setCategory(' ')}
                >Any</li>
                <li
                    onClick={() => setCategory('&category=9')}
                >General knowledge</li>
                <li
                    onClick={() => setCategory('&category=17')}

                >Science & Nature</li>
                <li
                    onClick={() => setCategory('&category=18')}

                >Computers</li>
                <li
                    onClick={() => setCategory('&category=19')}

                >Mathematics</li>
                <li
                    onClick={() => setCategory('&category=21')}
                >Sports</li>
                <li
                    onClick={() => setCategory('&category=22')}

                >Geography</li>
                <li
                    onClick={() => setCategory('&category=23')}

                >History</li>
                <li
                    onClick={() => setCategory('&category=25')}

                >Arts</li>
                <li
                    onClick={() => setCategory('&category=27')}

                >Animals</li>

            </ul>
        </div>)
}

export default Categories