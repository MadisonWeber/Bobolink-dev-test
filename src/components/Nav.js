import { Link } from 'react-router-dom'
import "../css/nav.css"

const Nav = () => {
    return (
        <div className = 'nav'>
            <h1>Developer Test</h1>
            <ul className = 'nav__links'>
                <Link to = '/'><li>Question 1</li></Link>
                <Link to = '/questiontwo'><li>Question 2</li></Link>
                <Link to = '/questionfive'><li>Question 5</li></Link>
            </ul>
        </div>
    )
}

export default Nav
